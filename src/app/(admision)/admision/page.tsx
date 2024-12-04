// import { BannerSection } from '@/components/intranet'
import { BannerSection } from '@/components/app'
import { ActionCards } from '@/modules/admision/pages/home/actions-card'
import { EventsAndNotifications } from '@/modules/admision/pages/home/events-notification'
import { ProfileCompletion } from '@/modules/admision/pages/home/profile-completion'
import { WelcomeBanner } from '@/modules/admision/pages/home/welcome-banner'
// import { Home } from 'lucide-react'
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
      <article className="relative">
        <BannerSection />
        <section className="container space-y-6 absolute -bottom-10 right-0 left-0">
          <WelcomeBanner />
        </section>
      </article>
      <main className="container space-y-6 pt-16">
        <ProfileCompletion />
        <ActionCards />
        <EventsAndNotifications />
      </main>
    </div>
  )
}
