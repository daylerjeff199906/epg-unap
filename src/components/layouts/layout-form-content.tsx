import { Button } from '../ui/button'

interface LayoutFormContentProps {
  children: React.ReactNode
  title?: string
  description?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const LayoutFormContent = (props: LayoutFormContentProps) => {
  const { children, onSubmit, title, description } = props

  return (
    <>
      <header className="flex flex-col gap-1 pt-5">
        <h1 className="font-bold text-xl">{title || 'Titulo de Formulario'}</h1>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </header>
      <hr className="mt-4 border-t border-gray-300" />
      <form
        action=""
        onSubmit={onSubmit}
      >
        <main className="h-screen max-h-[calc(100vh-200px)]">
          {children}
        </main>
        <footer className="mt-4 border-t absolute left-0 right-0 bottom-0 bg-white">
          <main className="flex justify-end w-full py-5 container">
            <Button variant="ghost">Cancelar</Button>
            <Button type="submit">Submit</Button>
          </main>
        </footer>
      </form>
    </>
  )
}
