import Link from 'next/link'

export function LayoutProfile({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Bienvenido, Pancracio</h1>
          <p className="text-gray-600">
            Bienvenidos, si deseas postular a un programa no pierdas la
            oportunidad
          </p>
        </div>
        <div className="grid md:grid-cols-[240px,1fr] gap-8">
          <nav className="bg-white rounded-lg p-4 h-fit">
            <div className="space-y-2">
              <Link
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
                href="#"
              >
                Información personal
              </Link>
              <Link
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
                href="#"
              >
                Información de contacto
              </Link>
              <Link
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
                href="#"
              >
                Información académica
              </Link>
              <Link
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
                href="#"
              >
                Información laboral
              </Link>
            </div>
          </nav>
          <div className="bg-white rounded-lg p-6">{children}</div>
        </div>
      </main>
    </div>
  )
}
