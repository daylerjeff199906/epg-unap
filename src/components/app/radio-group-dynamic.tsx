import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

interface RadioGroupDynamicProps {
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioGroupDynamic = (props: RadioGroupDynamicProps) => {
  const { defaultValue, value, onChange } = props
  return (
    <RadioGroup
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      <RadioGroupDynamicItem
        id="option-one"
        value="option-one"
        description="Option One"
      >
        Option One
      </RadioGroupDynamicItem>
      <RadioGroupDynamicItem
        id="option-two"
        value="option-two"
        description="Option Two"
      >
        Option Two
      </RadioGroupDynamicItem>
    </RadioGroup>
  )
}

interface RadioGroupItemProps {
  value: string
  id: string
  children?: React.ReactNode
  description?: string
}

export const RadioGroupDynamicItem = (props: RadioGroupItemProps) => {
  const { value, id, children, description } = props

  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value={value}
        defaultValue={value}
        id={id}
      />
      <section>
        {children && <Label htmlFor={value}>{children}</Label>}
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </section>
    </div>
  )
}
