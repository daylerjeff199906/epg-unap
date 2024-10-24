interface NavBarCustomProps {
  title: string
  color?: string
}

const colorsApp = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  tertiary: 'bg-tertiary-500',
  quaternary: 'bg-quaternary-500',
}

export const NavBarCustom = (props: NavBarCustomProps) => {
  const { title, color } = props

  return (
    <header
      className={`sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary dark:bg-background-darker dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background-dark dark:bg-background-darkest ${
        colorsApp[color as keyof typeof colorsApp]
      }`}
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
