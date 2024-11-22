import { NavbarUser } from '@/components/intranet'
import { admisionMenu } from '@/components/intranet/navbar-user/menu-items-list'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarUser menuItems={admisionMenu} />
      {children}
    </>
  )
}
