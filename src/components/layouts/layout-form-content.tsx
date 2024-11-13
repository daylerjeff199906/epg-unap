import React, { isValidElement } from 'react'
import { Button } from '../ui/button'

interface LayoutFormContentProps {
  children: React.ReactNode
  title?: string
  description?: string
  position?: 'left' | 'right' | 'none'
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  onCancel?: () => void
  labelOnSubmit?: string
  labelOnCancel?: string
}

export const LayoutFormContent = (props: LayoutFormContentProps) => {
  const {
    children,
    onSubmit,
    onCancel,
    title,
    description,
    position = 'none',
    labelOnSubmit,
    labelOnCancel,
  } = props

  const aside = React.Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === AsideLayoutFormContent
  )

  const mainContent = React.Children.toArray(children).filter(
    (child) => !(isValidElement(child) && child.type === AsideLayoutFormContent)
  )

  return (
    <form
      action=""
      onSubmit={onSubmit}
    >
      <header className="flex flex-col gap-1 pt-5">
        <h1 className="font-bold text-xl">{title || 'Titulo de Formulario'}</h1>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </header>
      <hr className="mt-4 border-t border-gray-300" />
      <main className="flex flex-row gap-4">
        {position !== 'none' && <>{position === 'left' && aside && aside}</>}
        <section
          className={`w-full 
              ${position === 'none' ? '' : 'lg:w-3/4'} ${
            position === 'left'
              ? 'border-l'
              : position === 'right'
              ? 'border-r'
              : ''
          }`}
        >
          {mainContent}
        </section>
        {position !== 'none' && <>{position === 'right' && aside && aside}</>}
      </main>
      <footer className="mt-4 border-t absolute left-0 right-0 bottom-0 bg-white">
        <main className="flex justify-end w-full py-5 container">
          <Button
            variant="ghost"
            type="button"
            onClick={onCancel}
          >
            {labelOnCancel || 'Cancelar'}
          </Button>
          <Button type="submit">{labelOnSubmit || 'Guardar'}</Button>
        </main>
      </footer>
    </form>
  )
}

export const AsideLayoutFormContent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <aside className="w-1/4 h-full p-4 overflow-y-auto">{children}</aside>
}
