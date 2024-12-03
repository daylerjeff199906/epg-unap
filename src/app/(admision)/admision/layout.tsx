import { CenteredWithBrandingFooter } from '@/components/app/footer-custom/centered-with-branding-footer'
import { NavbarUser } from '@/components/intranet'
import { admisionMenu } from '@/components/intranet/navbar-user/menu-items-list'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarUser menuItems={admisionMenu} />
      {children}
      <CenteredWithBrandingFooter />
    </>
  )
}
