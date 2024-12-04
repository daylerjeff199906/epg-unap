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
    url: '/admision/informacion-personal/contacto',
  },
  {
    title: 'Información académica',
    url: '/admision/informacion-personal/academico',
  },
  {
    title: 'Información laboral',
    url: '/admision/informacion-personal/laboral',
  },
]

export function LayoutProfile({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="bg-[#f5f8fc]">
      <main className="container py-8">
        <div className="flex flex-co sm:flex-row gap-8">
          <nav className="bg-white rounded-lg h-fit min-w-[240px] w-80 sticky top-20">
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">Tus detalles</h2>
            </div>
            <div className="">
              {dataUrls.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                  className={`block p-4 text-gray-500 hover:bg-gray-100 border-b ${
                    pathname === data.url
                      ? 'border-l-5 border-primary-800 text-primary-800 font-medium'
                      : ''
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
