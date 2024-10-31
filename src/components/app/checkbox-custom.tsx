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
}

export const CheckboxCustom = (props: CheckboxCustomProps) => {
  const { label, description, id } = props

  return (
    <div className="items-top flex space-x-2">
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
