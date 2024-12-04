import { BannerSection } from '@/components/app'
import { LayoutProfile } from '@/modules/admision/components/layouts/layout-profile'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BannerSection
        title="Hola Pancracio"
        description="Completa tus datos personales para continuar con el proceso de admisión."
      />
      <LayoutProfile>{children}</LayoutProfile>
    </>
  )
}
