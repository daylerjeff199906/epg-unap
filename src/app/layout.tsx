import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template EPG - UNAP',
  description:
    'Template de la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana',
  openGraph: {
    images: [
      {
        url: 'https://epg-unap.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Template EPG - UNAP',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
