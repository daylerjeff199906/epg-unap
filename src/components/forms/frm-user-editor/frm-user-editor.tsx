import { MultiStepTimeline } from '@/components/app'
import { UserInfoBasic } from './sections'

export const FrmUserEditor = () => {
  return (
    <main className="py-4">
      <header>
        <h1 className="font-bold text-xl">Agregar un usuario</h1>
      </header>
      <hr className="mt-4 border-t border-gray-300" />
      <main className="flex flex-col sm:flex-row">
        <aside className="sm:min-w-[320px] py-4">
          <MultiStepTimeline />
        </aside>
        <div className="hidden sm:block mx-4 border-l border-gray-300 "></div>
        <section className="w-full p-4">
          <UserInfoBasic />
        </section>
      </main>
      <footer></footer>
    </main>
  )
}
