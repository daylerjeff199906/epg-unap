import {
  Database,
  BookOpen,
  MonitorCog,
  HandCoins,
  GraduationCap,
  Globe,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'System Documentation',
    description:
      'Comprehensive documentation for understanding and using the system effectively.',
    href: '/docs',
  },
  {
    icon: <MonitorCog className="w-8 h-8" />,
    title: 'Administrative Panel',
    description:
      'Modules designed to help you manage the institution seamlessly and efficiently.',
    href: '/admin',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Academic Management',
    description:
      'Tools to support academic management with advanced features and functionality.',
    href: '/academic',
  },
  {
    icon: <HandCoins className="w-8 h-8" />,
    title: 'Economic Management',
    description:
      'Manage financial operations and economic reports within the institution.',
    href: '/economic',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Intranet',
    description:
      'A centralized space for internal communication and resource sharing.',
    href: '/intranet',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Institution Portal',
    description:
      'The public-facing portal showcasing key information and resources.',
    href: '/portal',
  },
]

export const Toolfeatures = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <main className="container w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Modules example</h1>
        <p className="text-gray-400 text-center mb-12">
          The best way to manage your institution, with the best tools and
          technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              key={index}
              className="bg-transparent px-8 py-16 flex flex-col items-center text-center border-r border-b border-gray-800 hover:bg-gradient-to-tr hover:from-gray-800 hover:to-gray-900 transition-colors duration-300"
              href={feature.href || '#'}
              target="_blank"
            >
              <div className="bg-gray-800 rounded-full p-3 mb-4">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </section>
  )
}
