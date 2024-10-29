import { Button } from '../ui/button'

interface LayoutFormContentProps {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const LayoutFormContent = (props: LayoutFormContentProps) => {
  const { children, onSubmit } = props

  return (
    <>
      <form
        action=""
        onSubmit={onSubmit}
      >
        <main>{children}</main>
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
