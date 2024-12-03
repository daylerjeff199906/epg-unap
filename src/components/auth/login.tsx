'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { AuthLayout } from './auth-layout'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthLayout>
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-2">Bienvenido de vuelta</h2>
        <p className="text-sm text-muted-foreground">
          No tienes una cuenta?{' '}
          <Link
            href="/sig-up"
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
    </AuthLayout>
  )
}
