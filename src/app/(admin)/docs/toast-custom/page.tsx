import { Metadata } from 'next'
import { ToastCustom } from '@/components/app'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Toast Custom',
    description: 'Componente de toast custom',
  }
  

export default function Page() {
  return (
    <div>
      <ToastCustom
        title="Successfully sent email to"
        description="john@example.com"
        icon={<Check className='bg-green-400 rounded-full p-1'/>}
      />
    </div>
  )
}