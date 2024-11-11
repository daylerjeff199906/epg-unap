'use client'

import { HeaderSection } from "@/components/app";
import { usePathname } from "next/navigation";


export const EnrollmentHeader = () => {
    const pathname = usePathname()
    return (
        <HeaderSection
            title="Gestión de Matrículas"
            description='Consulta y gestiona las matrículas registradas en el sistema. Usa el botón "Añadir" para crear nuevas matrículas y actualiza la información existente según sea necesario.'
            hrefAddLink={`${pathname}/agregar`}
        />
    )
}
