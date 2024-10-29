interface LabelInputsProps {
  id: string
  label: string
  description?: string
  children: React.ReactNode
}

export const ContentInput = (props: LabelInputsProps) => {
  const { id, label, description, children } = props

  return (
    <section
      className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4"
      id={id}
    >
      <div className="col-span-1 sm:col-span-1">
        <h3 className="text-sm font-bold">{label}</h3>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      <div className="col-span-1 sm:col-span-2">{children}</div>
    </section>
  )
}
