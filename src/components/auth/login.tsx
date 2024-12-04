'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react'
import { AuthLayout } from './auth-layout'
import { fetchLogin } from '@/api/admision'

// Esquema de validación con Zod
const loginSchema = z.object({
  username: z.string({
    message: 'El usuario es requerido.',
  }),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorsList, setErrorsList] = useState<Array<string>>([])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true)
    setErrorsList([])
    // setUserData(null)

    const response = await fetchLogin(data)

    if (response.status === 200 && response.data) {
      // setUserData(response.data)
      console.log('Usuario autenticado:', response.data)
    } else {
      setErrorsList(response.errors || ['Error desconocido.'])
    }

    setLoading(false)
  }

  return (
    <AuthLayout>
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-2">Bienvenido de vuelta</h2>
        <p className="text-sm text-muted-foreground">
          No tienes una cuenta?{' '}
          <Link
            href="/sign-up"
            className="text-blue-600 hover:underline"
          >
            Crear cuenta
          </Link>
        </p>
      </div>
      {errorsList?.length > 0 && (
        <section>
          <ul className="space-y-2 mt-4">
            {errorsList.map((error, index) => (
              <li
                key={index}
                className="text-red-500 text-sm"
              >
                {error}
              </li>
            ))}
          </ul>
        </section>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          {/* Campo de email */}
          <div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Usuario"
                  className="w-full"
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Campo de contraseña */}
          <div className="relative">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pr-10"
                />
              )}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
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

        <Button
          type="submit"
          className="w-full bg-[#001529] hover:bg-[#002140]"
          disabled={loading}
        >
          {loading && <Loader className="w-6 h-6 mr-2 animate-spin" />}
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
