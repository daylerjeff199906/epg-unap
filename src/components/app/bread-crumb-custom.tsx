'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const BreadcrumbCustom = () => {
  const pathname = usePathname()

  const generatePaths = (pathname: string) => {
    const paths = pathname.split('/').filter((path) => path !== '')

    const breadcrumbPaths = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`
      const pathReplace = path.replace(/-/g, ' ')
      return (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink asChild>
            <Link
              href={href}
              className="capitalize text-xs"
            >
              {pathReplace}
            </Link>
          </BreadcrumbLink>
          {index < paths.length - 1 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      )
    })

    return breadcrumbPaths
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>{generatePaths(pathname)}</BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
