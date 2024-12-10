import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYou() {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 py-10 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    MUCHAS GRACIAS POR TU INTERÉS
                </h1>
                <p className="text-white/90 text-lg mb-12">
                    Tus datos han sido enviados correctamente, en breve recibirás un correo confirmando tu postulación
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        variant="link"
                        className="text-white hover:text-white/90 underline"
                        asChild
                    >
                        <Link href="/programa">
                            Más información del programa
                        </Link>
                    </Button>
                    <Button
                        variant="secondary"
                        className="min-w-[120px]"
                        asChild
                    >
                        <Link href="/">
                            Ir al Inicio
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

