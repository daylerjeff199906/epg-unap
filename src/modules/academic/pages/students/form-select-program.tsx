'use client'
import { Divider } from '@nextui-org/react'
import { HeaderFormSection } from '@/components/layouts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Filter, Search } from 'lucide-react'
import {CardStudents} from './components/index'

export const SelectProgramStudents = () => {

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

    return (
        <div className="flex flex-col gap-6">
            <HeaderFormSection
                title="Seleccionar programa"
                description="Selecciona el programa para crear el expediente"
            />
            <div className='flex gap-2'>
                <Input placeholder="Ejemplo: Programa de Ingenieria" />
                <Button>
                    <Search />
                    Buscar
                </Button>
            </div>
            <Button variant={'link'} size={"sm"} className='text-blue-500 hover:text-blue-700 w-24'>
                <Filter />
                Filtros
            </Button>
            <Divider />
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Resultados encontrados</h2>
                <Button className='bg-default-300 text-black' size={"sm"}>
                    Limpiar busqueda
                </Button>
            </div>
            <CardStudents
                showButton={true}
                expedient={expedientData[0]}
            />
        </div>
    )
}
