import { BannerSection } from '@/components/app'
import { ActionCards } from '@/modules/admision/pages/home/actions-card'
import { EventsAndNotifications } from '@/modules/admision/pages/home/events-notification'
import { ProfileCompletion } from '@/modules/admision/pages/home/profile-completion'
import { WelcomeBanner } from '@/modules/admision/pages/home/welcome-banner'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <article className="relative">
        <BannerSection />
        <section className="container space-y-6 absolute -bottom-14 sm:-bottom-10 right-0 left-0">
          <WelcomeBanner />
        </section>
      </article>
      <main className="container space-y-6 pt-20 sm:pt-16 pb-10">
        <ProfileCompletion />
        <ActionCards />
        <EventsAndNotifications />
      </main>
    </div>
  )
}
