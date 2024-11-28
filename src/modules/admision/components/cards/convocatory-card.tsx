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
}

export const ConvocatoriaCard = ({
  id,
  status,
  title,
  description,
}: ConvocatoriaCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Icon"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
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
