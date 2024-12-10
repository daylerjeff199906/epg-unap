import { TitleParagraph } from "../typography/title-paragraph"

export const PostulationDetailCard = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <TitleParagraph text="Objetivos del programa" />
                <p className="text-foreground">
                    Esta maestría es una iniciativa de la Universidad Nacional de la Amazonía Peruana, comprometida con la excelencia académica y la formación de profesionales del derecho. El programa se ofrece de manera presencial y está diseñado para proporcionar a los estudiantes una comprensión profunda del marco legal en las áreas de derecho civil y comercial.
                </p>
            </div>

            <div className="space-y-4">
                <TitleParagraph text="Perfil del estudiante" />
                <ul className="list-disc list-inside  text-foreground space-y-1 pl-4">
                    <li>
                        Haber terminado la maestría en Antropología o contar con una
                        experiencia en investigación antropológica equivalente.
                    </li>
                    <li>
                        Tener una propuesta de investigación inicial, la cual será ampliada y mejorada para convertirse en el proyecto de tesis doctoral.
                    </li>
                    <li>
                        Tener la aceptación formal (por escrito) de un posible asesor o asesora. La aceptación formal del asesor o asesora deberá incluir una opinión, siempre por escrito, de la propuesta de investigación presentada por la persona que postula al doctorado.
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <TitleParagraph text="Perfil del graduado" />
                <p className=" text-foreground">
                    Al completar el Doctorado en Ciencias con mención en Ecología
                    Amazónica en la Escuela de Posgrado de la UNAP, los graduados
                    estarían preparados para...
                </p>
                <ul className="list-disc list-inside text-base text-foreground space-y-1 pl-4">
                    <li>
                        Abordar las necesidades y requerimientos de entidades gubernamentales y privadas a nivel nacional e internacional, desempeñándose como analistas sociales y culturales especializados, así como consultores expertos en cuestiones relacionadas con la ecología y la cultura amazónica.
                    </li>
                    <li>
                        Impartir de manera innovadora la enseñanza, utilizando recursos educativos actualizados, estrategias pedagógicas activas, un pensamiento analítico sólido y un fuerte compromiso con la educación de alta calidad, que sea intercultural, inclusiva y en consonancia con las necesidades de la región amazónica y el país.
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <TitleParagraph text="Documentación requerida" />
                <ul className="list-disc list-inside  text-foreground space-y-1 pl-4">
                    <li>
                        Copia fedateada del grado de maestro emitida por la universidad de origen. Y constancia de inscripción de la SUNEDU.
                    </li>
                    <li>Hoja de vida descriptiva (no documentada), según formato de la página web.</li>
                    <li>Copia simple de DNI. En el caso de postulantes extranjeros copia simple de pasaporte o carne de extranjería.</li>
                    <li>Proyecto de investigación en el área de estudio doctoral, no mayor de 10 páginas.</li>
                    <li>Recibo de pago por derecho de inscripción al proceso de admisión.</li>
                    <li>Tener todos los documentos en digital para subirlos a la plataforma virtual y en físico para presentarlo a la escuela de postgrado, en folder de plástico azul.</li>
                </ul>
            </div>
        </div>
    )
}
