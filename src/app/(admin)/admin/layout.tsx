import { AdminPanelLayout, NavBarCustom } from '@/components/app'
import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | Admin Panel | EPG - UNAP',
    default: 'Panel de administración de EPG - UNAP',
  },
  description: 'Panel de administración de EPG - UNAP',
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <NavBarCustom app="panel-admin" />
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </>
  )
}
