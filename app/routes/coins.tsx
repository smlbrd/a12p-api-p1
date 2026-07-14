import { getAllCoins } from "../services/coinService.ts"

export default async function CoinsDashboard() {
  const coins = await getAllCoins()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Coins Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {coins.map((coin) => (
          <div key={coin.id} className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h2 className="text-lg font-bold">{coin.name}</h2>
            <p className="text-slate-400 font-mono uppercase">{coin.isCompleted}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
