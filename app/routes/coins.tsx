import { createRoute } from "honox/factory"
import { db } from "../db/db.ts"
import { getAllCoinsWithDuties } from "../services/coinService.ts"

export default createRoute(async (c) => {
  const coins = await getAllCoinsWithDuties(db)

  return c.render(
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1>Coins Dashboard</h1>
      </div>

      {coins.length === 0 ? (
        <p className="text-slate-500 text-sm py-4">No coins available.</p>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden shadow-sm">
          {coins.map((coin) => (
            <section key={coin.id} role="group" aria-label={coin.name} className="p-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-base font-semibold">
                  <a href={`/coins/${coin.id}`}>{coin.name}</a>
                </h2>

                {coin.duties.length > 0 && (
                  <ul className="space-y-2 list-disc pl-5 text-sm text-slate-600 truncate">
                    {coin.duties.map((duty) => (
                      <li key={duty.id}>
                        Duty {duty.number} - {duty.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
})
