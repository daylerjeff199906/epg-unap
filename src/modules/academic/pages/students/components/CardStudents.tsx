import { Button, Chip, Divider } from "@nextui-org/react"

interface CardStudentsProps {
    title: string
    title_plan: string
    title_state: string
    showButton: boolean
}

export const CardStudents = (props:CardStudentsProps) => {

    const {title, title_plan, title_state, showButton} = props

    return (
        <main className="flex flex-col gap-2 bg-white border-1 rounded-medium p-4">
            <section className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-base">{title}</h1>
                    <Chip variant="flat" size="sm" color="warning">{title_state}</Chip>
                </div>
                <Chip className="bg-default-200" size="sm">{title_plan}</Chip>
            </section>
            <Divider />
            <section className="flex flex-col gap-2">
                <section className="flex justify-between items-end gap-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">Alumno: Jorguito del Aguila</p>
                        <p className="text-sm">Alumno: Jorguito del Aguila</p>
                    </div>
                    <div>
                        <p className="text-sm">Alumno: Jorguito del Aguila</p>
                    </div>
                </section>
                <section className="flex justify-between items-center">
                    <p className="text-sm">Creditos: 20.20</p>
                    {showButton && (
                        <Button variant="ghost" size="sm">Seleccionar</Button>
                    )}
                </section>
            </section>
        </main>
    )
}