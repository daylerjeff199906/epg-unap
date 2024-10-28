import { UserInfoBasic } from './sections'

export const FrmUserEditor = () => {
  return (
    <main className="py-4">
      <header>
        <h1 className="font-bold text-xl">Agregar un usuario</h1>
      </header>
      <hr className="my-4 border-t border-gray-300" />
      <main className="flex flex-col sm:flex-row">
        <aside className="sm:min-w-[320px] "></aside>
        <section className="w-full py-2">
          <UserInfoBasic />
        </section>
      </main>
      <footer></footer>
    </main>
  )
}
