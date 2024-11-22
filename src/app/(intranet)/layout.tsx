import { NavbarUser } from '@/components/intranet'
import { intranetMenu } from '@/components/intranet/navbar-user/menu-items-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | INTRANET | EPG - UNAP',
    default: 'Intranet | EPG - UNAP',
  },
  description:
    'Intranet de la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <NavbarUser menuItems={intranetMenu} />
      {children}
    </>
  )
}
