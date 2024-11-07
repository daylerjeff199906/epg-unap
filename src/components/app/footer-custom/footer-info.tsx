import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import { FooterSimple } from "./footer-simple"

export const FooterInfo = () => {
    return (
        <main className="bg-primary-800 w-full">
            <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-6 md:gap-4">
                {/* Sección 1: Logo y Descripción */}
                <section className="flex flex-col gap-3 p-2 items-center md:items-start text-center md:text-left w-full">
                    <div className="flex items-center gap-2">
                        <div>
                            <img src="/brands/escudo-epg.webp" alt="logo epg" className="w-10 h-16" />
                        </div>
                        <div className="text-xs text-white">
                            <p>ESCUELA DE</p>
                            <p>POSTGRADO UNAP</p>
                        </div>
                    </div>
                    <p className="w-full md:w-64 text-xs text-default-400 line-clamp-4">
                        Descripcion corta, Descripcion corta, Descripcion corta, Descripcion corta, Descripcion corta
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <Facebook strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Youtube strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Linkedin strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Instagram strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                    </div>
                </section>

                {/* Sección 2: Enlaces */}
                <section className="flex flex-wrap justify-center md:justify-between gap-4 p-2 w-full">
                    <div className="text-xs w-1/2 sm:w-auto">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                    <div className="text-xs w-1/2 sm:w-auto">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                    <div className="text-xs w-1/2 sm:w-auto">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                </section>

                {/* Sección 3: Información de Contacto */}
                <section className="grid grid-cols-1 md:grid-cols-2 p-2 w-full">
                    <div className="md:col-start-2 text-xs w-full">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-white">Titulo</p>
                            <div className="flex items-center gap-2">
                                <Mail strokeWidth={1.5} width={18} className="stroke-default-400 hover:stroke-primary-800" />
                                <p className="text-default-400">Correo</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            <FooterSimple />
        </main>
    )
}
