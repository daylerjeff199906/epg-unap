'use client'

import { Button } from '@/components/ui/button'
import { AuthLayout } from './auth-layout'
import { OTPInput, SlotProps } from 'input-otp'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export const VerifyEmail = () => {
  const searchParams = useSearchParams()

  const email = searchParams.get('email') || ''
  //   const [code, setCode] = useState('')

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
        <h2 className="text-2xl font-bold">Validar código</h2>
        <p className="text-sm text-gray-600">
          Hemos enviado un código de verificación al correo electrónico
          <span className="font-semibold"> {email}</span> Por favor, ingrésalo a
          continuación.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <OTPInput
            id="input-58"
            containerClassName="flex items-center gap-6 has-[:disabled]:opacity-50"
            maxLength={6}
            render={({ slots }) => (
              <div className="flex gap-3">
                {slots.map((slot, idx) => (
                  <Slot
                    key={idx}
                    {...slot}
                  />
                ))}
              </div>
            )}
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

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        'flex size-16 items-center justify-center rounded-lg border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow',
        { 'z-10 border border-ring ring-[3px] ring-ring/20': props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}
