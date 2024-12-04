import { Button } from "@/components/ui/button";
import { TitleParagraph } from "../typography/title-paragraph";

export const AplicationCard = () => {
    return (
        <div className="w-full max-w-sm bg-white shadow-md p-6">
            <TitleParagraph text="¿Listo para aplicar?" className="pb-4" />
            <p className="text-sm text-gray-600 mb-6">
                Asegúrese de que tiene todos los documentos requeridos listos antes de
                comenzar su aplicación para el programa de Maestría en Ciencias de la
                Computación.
            </p>

            <div className="mb-4">
                <div className="py-2 px-3 bg-gray-50 rounded-lg mb-3">
                    <p className="text-sm font-medium text-gray-900">Fechas importantes</p>
                    <p className="text-sm text-gray-600">Application Deadline: 2024-08-15</p>
                </div>
                <div className="py-2 px-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Duración de programa</p>
                    <p className="text-sm text-gray-600">2 años</p>
                </div>
            </div>

            <Button className="w-full py-2 bg-primary-900 text-white rounded-sm font-medium hover:bg-primary-800">
                Comenzar aplicación
            </Button>
        </div>
    );
}
