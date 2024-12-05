import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon } from "lucide-react";

export const PostulacionCard = () => {
    return (
        <div className="w-full max-w-sm bg-primary-900 text-white shadow-md p-6">
            <div className="flex gap-3 justify-start items-start">
                <div className="bg-primary-800 p-2 rounded-full flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Periodo de postulación</h2>
                    <p className="text-xs mb-2">15 de Enero al 15 de Marzo, 2024</p>
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                        <ClockIcon className="w-5 h-5" />
                        <p className="text-xs">Quedan 45 días para postular</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Button size='sm' className="rounded-sm w-full py-2 bg-gray-100 text-blue-900 font-medium hover:bg-gray-200">
                    Cronograma completo
                </Button>
                <Button size='sm' className="rounded-sm w-full py-2 bg-blue-500 font-medium hover:bg-blue-600">
                    Validar pago
                </Button>
            </div>
        </div>
    );
}
