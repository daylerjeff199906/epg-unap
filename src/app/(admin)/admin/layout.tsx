import { AdminPanelLayout, NavBarCustom } from '@/components/app'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <NavBarCustom
        title="Panel de administración de EPG - UNAP"
        color="primary"
      />
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </>
  )
}
