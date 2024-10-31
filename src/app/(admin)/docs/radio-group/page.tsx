import { HeaderSection, InputSearch, TabSection } from '@/components/app'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radio Group',
  description:
    'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
}

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <HeaderSection
          title="Radio Group"
          description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
          showAddButton={false}
          showRefreshButton={false}
          showExportButton={false}
        />

        <TabSection
          code={`
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}

        `}
        >
          <section className="w-full p-6 rounded-md">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </section>
        </TabSection>
      </section>
      <section>
        <HeaderSection
          title="Input Search"
          description="Displays a form input field or a component that looks like an input field with a search icon."
          showAddButton={false}
          showRefreshButton={false}
          showExportButton={false}
        />

        <TabSection
          code={`
import { InputSearch } from "@/components/ui/input"
 
export function InputDemo() {
        return <InputSearch placeholder="Buscar ..." />
}
        `}
        >
          <section className="w-full p-6 rounded-md">
            <InputSearch placeholder="Buscar ..." />
          </section>
        </TabSection>
      </section>
    </div>
  )
}
