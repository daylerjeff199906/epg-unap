import { LucideFacebook, LucideInstagram, LucideLinkedin, LucideYoutube } from "lucide-react"
import { FooterSimple } from "./footer-simple"

export const FooterLinksSection = () => {
    return (
        <main className="bg-primary-800">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2 bg-red-100">
                    <div>
                        <img src="/brands/escudo-epg.webp" alt="logo epg" className="w-10 h-16" />
                    </div>
                    <div className="flex flex-col justify-start text-xs">
                        <p>ESCUELA DE</p>
                        <p>POSTGRADO UNAP</p>
                    </div>
                </div>
                <div className="flex text-xs gap-4 bg-red-100">
                    <a href="#"><p> Apliaccion 1</p></a>
                    <a href="#"><p> Apliaccion 1</p></a>
                    <a href="#"><p> Apliaccion 1</p></a>
                    <a href="#"><p> Apliaccion 1</p></a>
                </div>
                <div className="flex gap-2">
                    <div className="border-1 border-white rounded-full p-2 text-xs hover:stroke-default-500 hover:bg-default-300 w-10 h-10">
                        <LucideFacebook strokeWidth={1.5} className="stroke-white hover:stroke-primary-800"/>
                    </div>
                    <div className="border-1 border-white rounded-full p-2 text-xs w-10 h-10">
                        <LucideYoutube strokeWidth={1.5}/>
                    </div>
                    <div className="border-1 border-white rounded-full p-2 text-xs w-10 h-10">
                        <LucideLinkedin strokeWidth={1.5}/>
                    </div>
                    <div className="border-1 border-white rounded-full p-2 text-xs w-10 h-10">
                        <LucideInstagram strokeWidth={1.5}/>
                    </div>
                </div>
            </div>
            <FooterSimple />
        </main>
    )
}