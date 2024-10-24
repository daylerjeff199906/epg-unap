interface NavBarCustomProps {
  title: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

const colorsApp = {
  primary: 'bg-primary-900 dark:bg-primary-800',
  secondary: 'bg-secondary-500',
  tertiary: 'bg-tertiary-500',
  quaternary: 'bg-quaternary-500',
}

export const NavBarCustom = (props: NavBarCustomProps) => {
  const { title, color } = props

  return (
    <header
      className={`sticky top-0 z-10 w-full bg-primary-900 dark:bg-primary-900  shadow text-white dark:shadow-secondary  `}
    >
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          {/* <SheetMenu /> */}
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          {/* <ModeToggle /> */}
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  )
}
