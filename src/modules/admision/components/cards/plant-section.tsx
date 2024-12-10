'use client'
import { useState } from 'react'
import {
    // Select,
    // SelectItem,
    // Selection,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from '@nextui-org/react'
import Image from 'next/image'
import { Downloadable } from '@/components/app/download-button'

export interface ICurso {
    id: number
    nombre: string
    codigo: string
    ciclo: number
    creditos: number
    horas_teoricas: number
    horas_practicas: number
    requisitos: IRequisito[]
}

export interface IRequisito {
    requisito__codigo: string
}


export interface IPlanEstudio {
    id: number
    nombre: string
    is_active: boolean
    costo: null | number
    comision: null | number
    cuotas: number
    matriculas: number
    modalidad: string
    sede: null | string
    duracion_academica: number
    programa: number
}

export interface ICiclo {
    ciclo: number
    cursos: ICurso[]
}

export interface IPlanEstudioListApi {
    plan_estudio: IPlanEstudio
    ciclos: ICiclo[]
    horas_totales: number
    creditos_totales: number
}

interface IProps {
    data: IPlanEstudioListApi[]
}

const columns = [
    {
        key: 'codigo',
        label: 'Código'
    },
    {
        key: 'asignatura',
        label: 'Asignatura'
    },
    {
        key: 'horas-teoricas',
        label: 'HT'
    },
    {
        key: 'horas_practicas',
        label: 'HP'
    },
    {
        key: 'creditos',
        label: 'C'
    },
    // {
    //     key: 'requisitos',
    //     label: 'Requisitos'
    // }
]

export function PlanSection(props: IProps) {
    const { data } = props
    const [itemSelected] = useState<number>(
        data.length > 0 ? data[0].plan_estudio.id : 0
    )

    const planEstudio = data.find(
        (plan) => plan.plan_estudio.id === itemSelected
    ) as IPlanEstudioListApi

    // const handleSelect = (selected: Selection) => {
    //     console.log(selected)
    //     const value = Object.values(selected)[0]

    //     if (value) {
    //         setItemSelected(Number(value))
    //     } else {
    //         setItemSelected(0)
    //     }
    // }
    return (
        <div className="flex flex-col justify-start gap-6">
            {data.length === 0 && (
                <div className='flex flex-col justify-center items-center section'>
                    <Image
                        src="/svg/not-programs.svg"
                        width={320}
                        height={320}
                        alt="not-plan"
                    />
                    <p className="text-center text-gray-500 max-w-sm">
                        No se encontraron planes de estudio para este programa académico
                    </p>
                </div>
            )}
            {data.length > 0 && (
                <>
                    {/* <header>
                        <Select
                            aria-label="Select a plan"
                            radius="sm"
                            size="lg"
                            selectedKeys={[String(itemSelected)]}
                            onSelectionChange={handleSelect}
                            disallowEmptySelection
                            items={data}
                            variant="bordered"
                            classNames={{
                                trigger: 'min-h-16'
                            }}
                            renderValue={(item) => {
                                return item.map((plan, index) => (
                                    <div className="flex gap-1" key={index.toString()}>
                                        <Image
                                            alt='Icono de "graduation-cap"'
                                            aria-label='Icono de "graduation-cap"'
                                            src="/images/Isotipo-EPG.webp"
                                            width={24}
                                            height={24}
                                        />
                                        <div className="flex flex-col">
                                            <h5 className="text-primary-800 text-lg font-bold leading-7">
                                                {plan?.textValue}
                                            </h5>
                                            <span className="text-gray-500 text-xs">
                                                Sede: {plan?.data?.plan_estudio?.sede} - Modalidad:{' '}
                                                {plan?.data?.plan_estudio?.modalidad}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }}
                        >
                            {(plan) => (
                                <SelectItem
                                    key={plan.plan_estudio.id}
                                    textValue={plan.plan_estudio.nombre}
                                >
                                    <SelectItemCustom
                                        key={plan.plan_estudio.id.toString()}
                                        title={plan.plan_estudio.nombre}
                                        description={`Sede: ${plan.plan_estudio.sede} - Modalidad: ${plan.plan_estudio.modalidad}`}
                                    />
                                </SelectItem>
                            )}
                        </Select>
                    </header> */}
                    <section className="rounded-lg border-opacity-70 border border-[#A4A4A4] w-full">
                        {planEstudio?.ciclos.map((cycle, outerIndex) => (
                            <div key={outerIndex}>
                                <h5 className="text-start font-semibold text-sm uppercase pt-5 px-5">
                                    Ciclo {cycle?.ciclo}
                                </h5>
                                <Table
                                    aria-label="Table of courses"
                                    radius="sm"
                                    shadow="none"
                                    fullWidth
                                >
                                    <TableHeader columns={columns}>
                                        {(column) => (
                                            <TableColumn key={column?.key}>
                                                {column?.label}
                                            </TableColumn>
                                        )}
                                    </TableHeader>
                                    <TableBody>
                                        {cycle.cursos.map((row, innerIndex) => (
                                            <TableRow key={innerIndex}>
                                                <TableCell id={row?.nombre} className="w-96">{row?.codigo}</TableCell>
                                                <TableCell className="w-96">
                                                    {row?.nombre}
                                                </TableCell>
                                                <TableCell>{row?.horas_teoricas}</TableCell>
                                                <TableCell>{row?.horas_practicas}</TableCell>
                                                <TableCell>{row?.creditos}</TableCell>
                                                {/* <TableCell align="center" className="w-52">
                                                    {row?.requisitos.length > 0
                                                        ? row?.requisitos.map((requisito, index) => (
                                                            <span key={index}>
                                                                {requisito?.requisito__codigo}
                                                            </span>
                                                        ))
                                                        : 'Ninguno'}
                                                </TableCell> */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ))}
                    </section>
                    <section className="flex flex-col gap-3.5">
                        <h5 className="text-black text-lg font-bold leading-7">
                            Descargar plan de estudios
                        </h5>
                        <Downloadable
                            title="Plan de estudios"
                            fileName="Plan-de-estudios.pdf"
                            file="#"
                        />
                    </section>
                </>
            )}
        </div>
    )
}

// interface ISelectItemProps {
//     key: string
//     title: string
//     description: string
// }

// const SelectItemCustom = (props: ISelectItemProps) => {
//     const { key, title, description } = props
//     return (
//         <div className="flex gap-1" key={key}>
//             <Image
//                 alt='Icono de "graduation-cap"'
//                 aria-label='Icono de "graduation-cap"'
//                 src="/images/Isotipo-EPG.webp"
//                 width={24}
//                 height={24}
//             />
//             <div className="flex flex-col">
//                 <h5 className="text-primary-800 text-lg font-bold leading-7">
//                     {title}
//                 </h5>
//                 <span className="text-gray-500 text-xs">{description}</span>
//             </div>
//         </div>
//     )
// }
