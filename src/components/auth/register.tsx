'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Check, Eye, EyeOff, X } from 'lucide-react'
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
import { useRouter } from 'next/navigation'

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration
    router.push('/admision')
  }

  const toggleVisibility = () => setShowPassword((prevState) => !prevState)

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: 'At least 8 characters' },
      { regex: /[0-9]/, text: 'At least 1 number' },
      { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
      { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
    ]

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }))
  }

  const strength = checkStrength(password)

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length
  }, [strength])

  const getStrengthColor = (score: number) => {
    if (score === 0) return 'bg-border'
    if (score <= 1) return 'bg-red-500'
    if (score <= 2) return 'bg-orange-500'
    if (score === 3) return 'bg-amber-500'
    return 'bg-emerald-500'
  }

  const getStrengthText = (score: number) => {
    if (score === 0) return 'Enter a password'
    if (score <= 2) return 'Weak password'
    if (score === 3) return 'Medium password'
    return 'Strong password'
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

          {/* <div className="space-y-2">
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
          </div> */}
          <div>
            {/* Password input field with toggle visibility button */}{' '}
            <div className="space-y-2">
              <Label htmlFor="input-51">
                Input with password strength indicator
              </Label>
              <div className="relative">
                <Input
                  id="input-51"
                  className="pe-9"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={strengthScore < 4}
                  aria-describedby="password-strength"
                />
                <button
                  className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  aria-controls="password"
                >
                  {showPassword ? (
                    <EyeOff
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            </div>
            {/* Password strength indicator */}
            <div
              className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
              role="progressbar"
              aria-valuenow={strengthScore}
              aria-valuemin={0}
              aria-valuemax={4}
              aria-label="Password strength"
            >
              <div
                className={`h-full ${getStrengthColor(
                  strengthScore
                )} transition-all duration-500 ease-out`}
                style={{ width: `${(strengthScore / 4) * 100}%` }}
              ></div>
            </div>
            {/* Password strength description */}
            <p
              id="password-strength"
              className="mb-2 text-sm font-medium text-foreground"
            >
              {getStrengthText(strengthScore)}. Must contain:
            </p>
            {/* Password requirements list */}
            <ul
              className="space-y-1.5"
              aria-label="Password requirements"
            >
              {strength.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                >
                  {req.met ? (
                    <Check
                      size={16}
                      className="text-emerald-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      size={16}
                      className="text-muted-foreground/80"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`text-xs ${
                      req.met ? 'text-emerald-600' : 'text-muted-foreground'
                    }`}
                  >
                    {req.text}
                    <span className="sr-only">
                      {req.met
                        ? ' - Requirement met'
                        : ' - Requirement not met'}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                placeholder="Confirmar contraseña"
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
