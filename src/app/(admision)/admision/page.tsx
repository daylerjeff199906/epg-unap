import { ActionCards } from '@/modules/admision/pages/home/actions-card'
import { EventsAndNotifications } from '@/modules/admision/pages/home/events-notification'
import { ProfileCompletion } from '@/modules/admision/pages/home/profile-completion'
import { WelcomeBanner } from '@/modules/admision/pages/home/welcome-banner'
import { Home } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ADMISION | EPG - UNAP',
    default: 'ADMISION | EPG - UNAP',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#001632] p-4">
        <nav>
          <a
            href="/"
            className="text-white flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">Inicio</span>
          </a>
        </nav>
      </header>

      <main className="container mx-auto p-4 space-y-6">
        <WelcomeBanner />
        <ProfileCompletion />
        <ActionCards />
        <EventsAndNotifications />
      </main>
    </div>
  )
}
