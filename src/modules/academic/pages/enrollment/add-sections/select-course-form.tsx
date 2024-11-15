'use client'

import { HeaderSection } from "@/components/app"
import { Divider } from "@nextui-org/react"
import { CardStudents } from "../../students/components"
import { CoursesList } from "./courses-list"

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

export const SelectCourseForm = () => {

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
                <CoursesList />
            </form>
        </>
    )
}
