import { CheckboxCustom, HeaderSection, TabSection } from '@/components/app'
import { Checkbox } from '@nextui-org/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Input',
  description: 'Componente de input',
}

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <HeaderSection
          title="Checkbox"
          description="A control that allows the user to toggle between checked and not checked."
          showAddButton={false}
          showRefreshButton={false}
          showExportButton={false}
        />

        <TabSection
          code={`
import { InputSearch } from "@/components/ui/input"
 
export function InputDemo() {
       return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
        `}
        >
          <section className="w-full p-6 rounded-md">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </section>
        </TabSection>
      </section>
      <section>
        <HeaderSection
          title="Checkbox Custom"
          description="Displays a form input field or a component that looks like an input field with a search icon."
          showAddButton={false}
          showRefreshButton={false}
          showExportButton={false}
        />

        <TabSection
          code={`
import { InputSearch } from "@/components/ui/input"
 
export function InputDemo() {
       return (
    <div className="flex items-center space-x-2">
            <CheckboxCustom
              label="Accept terms and conditions"
              description="You agree to our Terms of Service and Privacy Policy."
            />
        Accept terms and conditions
      </label>
    </div>
  )
}
        `}
        >
          <section className="w-full p-6 rounded-md">
            <CheckboxCustom
              label="Accept terms and conditions"
              description="You agree to our Terms of Service and Privacy Policy."
              variant="bordered"
            />
          </section>
        </TabSection>
      </section>
    </div>
  )
}
