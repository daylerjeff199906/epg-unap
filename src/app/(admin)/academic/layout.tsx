import { AdminPanelLayout, NavBarCustom } from '@/components/app'
import { MenuConfigApps } from '@/types/configApps'
import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | ACADEMICOS | EPG - UNAP',
    default: 'Sistema de Gestión Académica - EPG - UNAP',
  },
  description: 'Sistema de Gestión Académica - EPG - UNAP',
}

const APP_NAME_KEY: MenuConfigApps = 'academic'

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <NavBarCustom app={APP_NAME_KEY} />
      <AdminPanelLayout app={APP_NAME_KEY}>{children}</AdminPanelLayout>
    </>
  )
}
