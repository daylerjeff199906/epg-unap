import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface ActionCardProps {
  icon: JSX.Element
  title: string
  description: string
  link: string
}

export const ActionCard = (props: ActionCardProps) => {
  const { icon, title, description, link } = props
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <Link
            href={link}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Acceder →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
