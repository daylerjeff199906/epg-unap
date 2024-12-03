'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthLayout } from './auth-layout'

export default function VerifyEmailPage() {
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle verification
  }

  const handleResend = () => {
    // Handle resend code
  }

  return (
    <AuthLayout>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Verificar el email</h2>
        <p className="text-sm text-gray-600">
          Hemos enviado un correo electrónico de verificación a{' '}
          <span className="font-medium">email@example.com</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Input
            placeholder="Ingresar el código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#001B3D]"
        >
          Reenviar email
        </Button>

        <p className="text-center text-sm text-gray-600">
          ¿No has recibido el correo electrónico?{' '}
          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 hover:underline"
          >
            Comprobar la carpeta de Spam y promociones
          </button>
        </p>
      </form>
    </AuthLayout>
  )
}
