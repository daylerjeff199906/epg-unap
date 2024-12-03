'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AuthLayout } from './auth-layout'

export const EmailSignup = () => {
  const [email, setEmail] = useState('')
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <AuthLayout>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Crear cuenta</h2>
        <p className="text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => setAccepted(checked as boolean)}
            required
          />
          <Label
            htmlFor="terms"
            className="text-sm leading-none"
          >
            Acepto las{' '}
            <Link
              href="/terms"
              className="text-blue-600 hover:underline"
            >
              Condiciones de servicio
            </Link>{' '}
            y la{' '}
            <Link
              href="/privacy"
              className="text-blue-600 hover:underline"
            >
              política de privacidad
            </Link>{' '}
            de EPG - UNAP
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#001B3D]"
          disabled={!accepted}
        >
          Crear cuenta
        </Button>
      </form>
    </AuthLayout>
  )
}
