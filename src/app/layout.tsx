import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { NavBarCustom } from '@/components/app'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template EPG - UNAP',
  description:
    'Template de la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
        <Providers>
          <NavBarCustom
            title="Template EPG - UNAP"
            color="primary"
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}
