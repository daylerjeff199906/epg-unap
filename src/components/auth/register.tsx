'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AuthLayout } from './auth-layout'

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration
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
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="documentType">Tipo de documento</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar tipo de documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dni">DNI</SelectItem>
                <SelectItem value="passport">Pasaporte</SelectItem>
                <SelectItem value="ce">Carné de Extranjería</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentNumber">N° de documento</Label>
            <Input
              id="documentNumber"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nombres">Nombres</Label>
            <Input
              id="nombres"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primerApellido">Primer apellido</Label>
              <Input
                id="primerApellido"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="segundoApellido">Segundo apellido</Label>
              <Input
                id="segundoApellido"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
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
