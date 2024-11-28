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
      <ConvocatoryListPage />
    </>
  )
}
