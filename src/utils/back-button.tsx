'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface IProps {
    className?: string
}

export const BackButton = (
    { className }: IProps
) => {
    const router = useRouter()
    const pathname = usePathname()
    const pathBack = pathname.split('/').slice(0, -1).join('/')

    const handleBack = () => {
        router.push(pathBack)
    }

    return (
        <Button
            variant="link"
            className={cn("text-white px-0", className)}
            onClick={handleBack}
        >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
        </Button>
    )
}
