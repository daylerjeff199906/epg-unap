import { NavbarUser } from '@/components/intranet'
import { admisionMenu } from '@/components/intranet/navbar-user/menu-items-list'

export default function Layout({ layout }: { layout: React.ReactNode }) {
  return (
    <>
      <NavbarUser menuItems={admisionMenu} />
      {layout}
    </>
  )
}
