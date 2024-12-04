import { Book, GraduationCap, Coins } from 'lucide-react'
import { ActionCard } from '../../components'
import { urlDataAdmision } from '../../constants'

export const ActionCards = () => {
  const cards = [
    {
      icon: <Book className="w-6 h-6 text-blue-600" />,
      title: 'Convocatorias',
      description: 'Explora nuestros programas académicos',
      link: urlDataAdmision.convocation.urls.base,
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: 'Postulaciones',
      description: 'Revisa el estado de tus postulaciones',
      link: urlDataAdmision.admision.urls.base,
    },
    {
      icon: <Coins className="w-6 h-6 text-blue-600" />,
      title: 'Pagos',
      description: 'Realiza tus pagos pendientes',
      link: '#',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <ActionCard
          key={index}
          {...card}
        />
      ))}
    </div>
  )
}
