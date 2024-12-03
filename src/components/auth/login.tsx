'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side */}
      <div className="hidden lg:flex w-3/5 bg-[#001529] relative flex-col p-8 justify-between">
        <div className="flex items-center gap-2 text-white">
          <Image
            src="/brands/escudo-epg.webp?height=40&width=40"
            alt="EPG-UNAP Logo"
            width={35}
            height={35}
            className="object-contain w-9 h-9 min-w-9 min-h-9 max-w-9 max-h-9"
          />
          <span className="text-xl font-semibold">EPG - UNAP</span>
        </div>
        <div className="mt-32 text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Admisión</h1>
          <p className="text-lg opacity-90">
            Inicia sesión para más información de las convocatorias y
            seguimiento de tus postulaciones
          </p>
        </div>
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c50 0 50 100 100 100V0H0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: 'cover',
          }}
        />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Bienvenido de vuelta</h2>
            <p className="text-sm text-muted-foreground">
              No tienes una cuenta?{' '}
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                Crear cuenta
              </Link>
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Recuperar contraseña
              </Link>
            </div>

            <Button className="w-full bg-[#001529] hover:bg-[#002140]">
              Iniciar sesión
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">o</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {}}
            >
              <Image
                src="/svg/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Continuar con Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
