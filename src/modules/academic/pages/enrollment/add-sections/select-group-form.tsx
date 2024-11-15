'use client'

import { HeaderSection } from "@/components/app"
import { Divider } from "@nextui-org/react"
import { CardStudents } from "../../students/components"

const expedientData = [
    {
        id: 1,
        title: 'Programa de Ingenieria',
        title_plan: 'Plan de estudio 2021',
        title_state: 'En curso',
        nombre_usuario: 'Juan Perez',
        persona_asignada: 'Maria Lopez',
    }
]

export const SelectGroupForm = () => {

    return (
        <>
            <HeaderSection
                title='Cursos disponible'
                description='Selecciona los cursos que estan disponibles para la matrícula'
                disabledActions
            />
            <form action="" onSubmit={() => { }} className="flex flex-col gap-4">
                <CardStudents
                    expedient={expedientData[0]}
                    className="border-none rounded-none bg-transparent"
                />
                <Divider />
                <div className="flex flex-col gap-4">
                    <label htmlFor="group" className="text-sm font-semibold text-muted-foreground">Grupos</label>
                    <select name="group" id="group" className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="1">Grupo 1</option>
                        <option value="2">Grupo 2</option>
                        <option value="3">Grupo 3</option>
                    </select>
                </div>
            </form>
        </>
    )
}
