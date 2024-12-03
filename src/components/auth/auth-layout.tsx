import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="hidden w-1/2 bg-[#001B3D] p-10 lg:block">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="EPG - UNAP Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-semibold text-white">EPG - UNAP</span>
        </div>
        <div className="mt-40">
          <h1 className="text-4xl font-bold text-white">Admisión</h1>
          <p className="mt-4 text-lg text-gray-300">
            Inicia sesión para más información de las convocatorias y
            seguimiento de tus postulaciones
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2">
          <svg
            viewBox="0 0 800 800"
            className="w-full opacity-20"
          >
            <path
              d="M 0 400 C 200 400 400 600 600 400 C 800 200 1000 400 1200 400"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Right side */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  )
}
