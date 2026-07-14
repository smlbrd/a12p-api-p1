export default function Home() {
    return (
        <div className="space-y-6">
        <h1 className="text-4xl font-extrabold text-white">Welcome to the App</h1>
    <p className="text-slate-300">This page is rendered entirely on the server.</p>
    <a
    href="/coins"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        View Coins Dashboard →
      </a>
      </div>
)
}