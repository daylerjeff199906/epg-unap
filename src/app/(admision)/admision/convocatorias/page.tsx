import { BannerSection } from '@/components/app'
import { ConvocatoryListPage } from '@/modules/admision'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Convocatorias',
  description:
    'Convocatorias de admisión a la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana.',
}

export default function page() {
  return (
    <>
      <BannerSection
        title="Convocatorias abiertas"
        description="Convocatorias de admisión a la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana."
        rightContent={
          <Image
            src="/svg/graduation-cap.svg"
            alt='Ilustración de una person  a con un megáfono y un cartel que dice "Convocatorias"'
            width={300}
            height={300}
            className="object-cover"
          />
        }
      />
      <main className="flex flex-col sm:flex-row gap-6 py-12 space-y-4 container">
        <aside className="w-full sm:w-1/4">
          <ConvocatoryListPage />
        </aside>
        <article className="w-full sm:w-3/4"></article>
      </main>
    </>
  )
}
