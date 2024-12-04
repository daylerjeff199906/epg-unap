'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dataUrls = [
  {
    title: 'Información personal',
    url: '/admision/informacion-personal',
  },
  {
    title: 'Información de contacto',
    url: '#',
  },
  {
    title: 'Información académica',
    url: '#',
  },
  {
    title: 'Información laboral',
    url: '#',
  },
]

export function LayoutProfile({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <main className="container py-8">
        <div className="flex flex-co sm:flex-row gap-8">
          <nav className="bg-white rounded-lg h-fit min-w-[240px] w-80">
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">Tus detalles</h2>
            </div>
            <div className="">
              {dataUrls.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                  className={`block p-4 hover:bg-gray-100 border-b ${
                    pathname === data.url ? 'border-l-8 border-primary-800' : ''
                  }`}
                >
                  {data.title}
                </Link>
              ))}
            </div>
          </nav>
          <article className="w-full bg-white rounded-lg p-6">
            {children}
          </article>
        </div>
      </main>
    </div>
  )
}
