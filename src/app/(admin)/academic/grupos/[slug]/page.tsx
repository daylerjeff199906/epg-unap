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
    title: `Grupos de Cursos - ${name.toUpperCase()}`,
  }
}

export default function Page(props: IProps) {
  const { slug } = props.params

  return (
    <div>
      <h1>Grupos de Cursos</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}
