import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { FooterSimple } from "./footer-simple"

export const FooterInfo = () => {
    return (
        <main className="bg-primary-800">
            <div className="flex items-start justify-start gap-4 p-4">
                <section className="flex flex-col justify-start gap-2 p-2">
                    <div className="flex items-center gap-2 p-2">
                        <div>
                            <img src="/brands/escudo-epg.webp" alt="logo epg" className="w-10 h-16" />
                        </div>
                        <div className="flex flex-col justify-start text-xs text-white">
                            <p>ESCUELA DE</p>
                            <p>POSTGRADO UNAP</p>
                        </div>
                    </div>
                    <div>
                        <p className="w-64 text-xs text-default-400 line-clamp-2">Descripcion corta, Descripcion corta, Descripcion corta, Descripcion corta,
                            Descripcion corta</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <Facebook strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Youtube strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Linkedin strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                        <Instagram strokeWidth={1.5} width={18} className="stroke-white hover:stroke-primary-800" />
                    </div>
                </section>
                <section className="flex gap-2 p-2">
                    <div className="text-xs">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                    <div className="text-xs">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                    <div className="text-xs">
                        <p className="font-semibold text-white">Titulo</p>
                        <a href="#"><p className="text-default-400">Lista de links</p></a>
                    </div>
                </section>
                <section className="text-xs">
                    <p className="font-semibold text-white">Titulo</p>
                    <div>
                        Contactos
                        <div>
                            icon
                        </div>
                    </div>
                </section>
            </div>
            <FooterSimple />
        </main>
    )
}