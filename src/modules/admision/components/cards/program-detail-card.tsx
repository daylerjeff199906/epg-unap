'use client'

import { Calendar, Users, GraduationCap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { BackButton } from '@/utils/back-button'

export const ProgramDetailCard = () => {
    return (
        <Card className="max-w-xl bg-white rounded-sm">
            <CardContent className="py-10 px-6  ">
                <BackButton className='text-primary-500' />

                <div className="mb-4 text-primary">
                    Plan de estudios 2024 A - II
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                    MAESTRÍA EN CIENCIAS EN GESTIÓN AMBIENTAL
                </h1>

                <div className="inline-block bg-primary-900 text-white text-sm px-4 py-2 mb-6">
                    Convocatoria hasta 19/02/2025
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary-700" />
                        <div>
                            <span className="font-bold text-primary-700">Inicio:</span>{" "}
                            <span className="text-primary-700">24/03/2025</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary-700" />
                        <div>
                            <span className="font-bold text-primary-700">Modalidad:</span>{" "}
                            <span className="text-primary-700">Presencial</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-primary-700" />
                        <div>
                            <span className="font-bold text-primary-700">Areas:</span>{" "}
                            <span className="text-primary-700">Ingeniería, ciencia básicas y aplicadas, salud</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}