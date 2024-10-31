import { BellDot } from "lucide-react"

export const Notification = () => {
    return (
        <div className="flex flex-col w-full max-w-sm p-4 mb-6 text-white bg-gray-100 bg-opacity-50 rounded-lg shadow-lg pointer-events-auto md:p-6 lg:p-8">
            <div className="flex items-center gap-2">
                <h1 className="font-bold text-black text-base">NOTIFICACIONES</h1>
                <BellDot className="stroke-black w-5" />
            </div>
            <hr className="mt-2"/>
            <div className="flex gap-2 p-2">
                <h1 className="text-black text-xs">Todos</h1>
                <h1 className="text-black text-xs">No leidos</h1>
            </div>
            <hr/>
        </div>
    )
}