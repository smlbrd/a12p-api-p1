# --- Build Stage ---
FROM public.ecr.aws/lambda/nodejs:24 AS builder
WORKDIR /app

# Install all dependencies (including devDependencies needed to build)
COPY package*.json ./
RUN npm ci

# Copy source and configurations
COPY . .

# Build both server and client bundles (Vite outputs to /app/dist)
RUN npm run build

# --- Production Runner Stage ---
FROM public.ecr.aws/lambda/nodejs:24
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy package configurations
COPY package*.json ./

# Install ONLY production dependencies and ignore lifecycle scripts (like Husky)
RUN npm ci --omit=dev --ignore-scripts

# Copy the CONTENTS of /app/dist directly to the root of /var/task (note the trailing slash)
COPY --from=builder /app/dist/ ./

# Point AWS Lambda directly to lambda.handler
CMD ["lambda.handler"]