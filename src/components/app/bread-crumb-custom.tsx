'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'

export const BreadcrumbCustom = () => {
  const pathname = usePathname()

  const generatePaths = (pathname: string) => {
    const paths = pathname.split('/').filter((path) => path !== '')

    const breadcrumbPaths = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`
      const pathReplace = path.replace(/-/g, ' ')
      return (
        <div
          key={path}
          className="flex items-center gap-1"
        >
          <BreadcrumbItem>
            {index < paths.length - 1 ? (
              <BreadcrumbLink
                href={href}
                className="capitalize text-xs"
              >
                {pathReplace}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage className="capitalize text-xs">
                {pathReplace}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {index < paths.length - 1 && <BreadcrumbSeparator />}
        </div>
      )
    })

    return breadcrumbPaths
  }

  return (
    <div className="w-full container">
      <Breadcrumb>
        <BreadcrumbList>{generatePaths(pathname)}</BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
