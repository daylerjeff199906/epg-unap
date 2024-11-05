import { BannerSection } from '@/components/intranet'

interface LayoutStudentProps {
  title: string
  subtitle?: string
}

export const LayoutStudent = (props: LayoutStudentProps) => {
  const { title, subtitle } = props

  return (
    <>
      <BannerSection
        title={title}
        subtitle={subtitle}
      />
      <main className="bg-primary-50">
        <section className="container">asdasdasdasd</section>
      </main>
    </>
  )
}
