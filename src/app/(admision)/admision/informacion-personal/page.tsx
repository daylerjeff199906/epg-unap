import { BannerSection } from '@/components/app'
import { PersonalInfoForm } from '@/modules/admision'
import { LayoutProfile } from '@/modules/admision/components/layouts/layout-profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información Personal',
}

export default function Page() {
  return (
    <>
      <BannerSection
        title="Hola Pancracio"
        description="Completa tus datos personales para continuar con el proceso de admisión."
      />
      <LayoutProfile>
        <PersonalInfoForm />
      </LayoutProfile>
    </>
  )
}
