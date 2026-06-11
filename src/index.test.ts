import {describe, test, expect, beforeEach} from 'vitest';
import app from "./index.ts";
import { db } from "./db/db.ts";
import { coins } from "./db/schema.ts";

const COIN_IDS = {
    ASSEMBLE: 'e3a1b2c3-4d5e-6f7a-8b9c-0d1e2f3a4b5c',
    AUTOMATE: 'fa1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
    CALL_SECURITY: 'b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
    GOING_DEEPER: 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
    HOUSTON: 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a'
};

const coinsData = [
    { id: COIN_IDS.ASSEMBLE, name: 'Assemble', isCompleted: false },
    { id: COIN_IDS.AUTOMATE, name: 'Automate', isCompleted: false },
    { id: COIN_IDS.CALL_SECURITY, name: 'Call Security', isCompleted: false },
    { id: COIN_IDS.GOING_DEEPER, name: 'Going Deeper', isCompleted: false },
    { id: COIN_IDS.HOUSTON, name: 'Houston, Prepare to Launch', isCompleted: false }
];

describe("/health", () => {
    test("should return a 200 status", async () => {
        const res = await app.request("/health")

        expect(res.status).toBe(200)
    })
})

describe("/coins", () => {
    beforeEach(async () => {
        await db.delete(coins);
        await db.insert(coins).values(coinsData);
    })

    test("should return a list of all coins", async () => {
        const res = await app.request("/coins")

        expect(res.status).toBe(200)

        const data = await res.json();
        expect(data).toEqual(coinsData);
    })
})