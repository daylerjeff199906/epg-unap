import { AdminPanelLayout, NavBarCustom } from '@/components/app'
import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | Documentación',
    default: 'Bienvenido',
  },
  description: 'Documentación de la aplicación',
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <NavBarCustom app="academicos" />
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </>
  )
}
