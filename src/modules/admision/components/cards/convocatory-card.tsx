'use client'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface ConvocatoriaCardProps {
  id: string
  status: 'active' | 'inactive'
  title: string
  description: string
  isActive?: boolean
}

export const ConvocatoriaCard = ({
  id,
  status,
  title,
  description,
  isActive,
}: ConvocatoriaCardProps) => {
  return (
    <Card
      className={`p-4 border-l-8 ${
        isActive && 'bg-slate-50 border-primary-500'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="py-2 px-3 bg-white flex items-center justify-center shadow-xl rounded-md">
          <Image
            src="/brands/escudo-epg.webp"
            alt="Icon"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <Badge
              className={
                status === 'active'
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                  : 'bg-danger-50 text-danger-500 hover:bg-danger-100'
              }
            >
              {status === 'active' ? 'Activa' : 'Inactiva'}
            </Badge>
          </div>
          <h3 className="font-semibold mb-1">
            <Link href={`/admision/convocatorias/${id}`}>{title}</Link>
          </h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </Card>
  )
}
