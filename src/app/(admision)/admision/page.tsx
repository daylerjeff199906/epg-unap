import { NavbarUser } from '@/components/intranet'
import { admisionMenu } from '@/components/intranet/navbar-user/menu-items-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ADMISION | EPG - UNAP',
    default: 'ADMISION | EPG - UNAP',
  },
}

export default function Page() {
  return (
    <>
      <NavbarUser menuItems={admisionMenu} />
    </>
  )
}
