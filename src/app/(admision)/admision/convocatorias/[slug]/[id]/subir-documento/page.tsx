"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileUploadInput } from "@/modules/admision"

export default function DocumentUpload() {
    const [files, setFiles] = useState({
        dni: null,
        academic: null,
        thesis: null,
    })

    const handleFileChange = (type: keyof typeof files) => (file: File) => {
        setFiles((prev) => ({ ...prev, [type]: file }))
    }

    const handleFileDrop = (type: keyof typeof files) => (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (e.dataTransfer.files?.[0]) {
            setFiles((prev) => ({ ...prev, [type]: e.dataTransfer.files[0] }))
        }
    }

    const pathname = usePathname()
    const pathBack = pathname.split('/').slice(0, -1).join('/')

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-6 md:p-10 lg:p-14">
            <div className="max-w-3xl mx-auto">
                <Link href={pathBack}>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a detalles de programa
                    </button>
                </Link>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-xl font-semibold mb-6">Documentos requeridos para el programa</h1>

                    <div className="space-y-6">
                        <FileUploadInput
                            label="DNI"
                            file={files.dni}
                            accept=".xls,.xlsx"
                            onFileChange={handleFileChange('dni')}
                            onFileDrop={handleFileDrop('dni')}
                        />
                        <FileUploadInput
                            label="Grado académico"
                            file={files.academic}
                            accept=".xls,.xlsx"
                            onFileChange={handleFileChange('academic')}
                            onFileDrop={handleFileDrop('academic')}
                        />
                        <FileUploadInput
                            label="Tesis post doctoral"
                            file={files.thesis}
                            accept=".xls,.xlsx"
                            onFileChange={handleFileChange('thesis')}
                            onFileDrop={handleFileDrop('thesis')}
                        />
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Link
                            href="/admision/convocatorias/[slug]/[id]/registro-exitoso"
                        >
                            <Button className="px-6">
                                Enviar aplicación
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
