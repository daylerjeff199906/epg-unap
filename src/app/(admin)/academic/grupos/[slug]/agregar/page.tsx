import { FrmGroupCreate } from '@/modules/academic'
import { Metadata } from 'next'

interface IProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  // read route params
  const name = (await params).slug

  return {
    title: `AÑADIR GRUPO - ${name.toUpperCase()}`,
  }
}

export default function page() {
  return <FrmGroupCreate />
}
