interface LayoutSectionPageProps {
  isBorder?: boolean
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
}

export const LayoutSectionPage = (props: LayoutSectionPageProps) => {
  const { children, isBorder, radius } = props
  return (
    <section
      className={`bg-white dark:bg-gray-800 shadow-md rounded-lg ${
        isBorder ? 'border border-gray-200 dark:border-gray-700' : ''
      } ${radius ? `rounded-${radius}` : ''}`}
    >
      <header></header>
      <main>{children}</main>
    </section>
  )
}
