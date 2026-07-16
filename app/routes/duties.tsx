import { createRoute } from "honox/factory"
import { dutiesData } from "../db/seeds/seedData.ts"

export default createRoute(async (c) => {
  return c.render(
    <main className="space-y-8 max-w-4xl mx-auto px-4 py-6">
      <header className="flex items-center justify-between border-b border-gray-600 pb-5">
        <div>
          <h1 className="text-xl font-bold text-[#003366] font-sans">Duties</h1>
          <p className="text-gray-500 text-xs mt-1">View duties and their details.</p>
        </div>
        <a
          href="/coins"
          className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 border border-blue-300 px-3 py-1.5 rounded bg-blue-50 hover:bg-blue-100 transition"
        >
          &larr; Back to Coins
        </a>
      </header>

      <ul className="space-y-6 list-none p-0 m-0">
        {dutiesData.map((duty) => {
          return (
            <li
              key={duty.id}
              id={`duty-${duty.number}`}
              className="p-5 bg-white border border-gray-400 scroll-mt-6 transition-all duration-300 hover:border-blue-400 target:ring-2 target:ring-blue-500 target:border-transparent"
            >
              <article className="flex flex-col gap-3">
                <header className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-[#003366] font-sans">Duty {duty.number}</h2>
                </header>

                <p className="text-gray-700 text-sm leading-relaxed">{duty.description}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </main>
  )
})
