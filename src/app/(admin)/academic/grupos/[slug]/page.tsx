interface IProps {
  params: {
    slug: string
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
