'use client'
import { Checkbox } from '@/components/ui/checkbox'

// interface CheckboxProps extends UseCheckboxProps {
// }
// declare const Checkbox: _nextui_org_system.InternalForwardRefRenderFunction<"input", CheckboxProps, never>;

// export { CheckboxProps, Checkbox as default };

interface CheckboxCustomProps {
  id?: string
  label?: string
  description?: string
  variant?: 'default' | 'bordered' | 'flat'
}

const variants = {
  default: {
    color: '',
  },
  bordered: {
    color: 'border',
  },
  flat: {
    color: 'bg-gray-100',
  },
}

export const CheckboxCustom = (props: CheckboxCustomProps) => {
  const { id, label, description, variant = 'default' } = props

  const variantStyle = variants[variant]

  return (
    <div className={`items-top flex space-x-2 p-4 rounded-sm ${variantStyle.color}`}>
      <Checkbox id={id || 'terms1'} />
      <div className="grid gap-1.5 leading-none">
        {label && (
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        )}
      </div>
    </div>
  )
}
