import { CenteredWithBrandingFooter } from '@/components/app/footer-custom/centered-with-branding-footer'
import { NavbarUser } from '@/components/intranet'
import { admisionMenu } from '@/components/intranet/navbar-user/menu-items-list'
import { Metadata } from 'next'
// import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: {
    template: '%s | ADMISION | EPG - UNAP',
    default: 'ADMISION | EPG - UNAP',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarUser menuItems={admisionMenu} />
      {children}
      <CenteredWithBrandingFooter />
    </>
  )
}
