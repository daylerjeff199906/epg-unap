import { IEnrollment } from "@/modules/academic/pages/enrollment/enrollment-columns"

export const payments: IEnrollment[] = [
    {
        id: 1,
        fecha_creacion: "20/10/2024",
        nombre_usuario: "asaavedral@postgradounap.edu.pe",
        persona_asignada: "ANGIE LÓPEZ HUAMASH",
        roles: ["ADMINISTRADOR", "DOCENTE", "ESTUDIANTE"],
        permisos: ["ADMINISTRADOR", "DOCENTE", "ESTUDIANTE"]
    },
    {
        id: 2,
        fecha_creacion: "21/10/2024",
        nombre_usuario: "jlopezr@postgradounap.edu.pe",
        persona_asignada: "JUAN LÓPEZ RAMÍREZ",
        roles: ["ESTUDIANTE"],
        permisos: ["ESTUDIANTE"]
    },
    {
        id: 3,
        fecha_creacion: "22/10/2024",
        nombre_usuario: "mperezc@postgradounap.edu.pe",
        persona_asignada: "MARÍA PÉREZ CASTRO",
        roles: ["DOCENTE", "ESTUDIANTE"],
        permisos: ["DOCENTE", "ESTUDIANTE"]
    },
    {
        id: 4,
        fecha_creacion: "23/10/2024",
        nombre_usuario: "rfernandezv@postgradounap.edu.pe",
        persona_asignada: "ROBERTO FERNÁNDEZ VARGAS",
        roles: ["ADMINISTRADOR"],
        permisos: ["ADMINISTRADOR"]
    },
    {
        id: 5,
        fecha_creacion: "24/10/2024",
        nombre_usuario: "lramirezs@postgradounap.edu.pe",
        persona_asignada: "LAURA RAMÍREZ SÁNCHEZ",
        roles: ["DOCENTE"],
        permisos: ["DOCENTE"]
    }
]

export type Payment = {
    id: string
    fecha_creacion: string
    nombre_usuario: string
    persona_asignada: string
    roles: string[]
    permisos: string[]
}