import { BellDot, Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

interface NotificationProps {
    children?: React.ReactNode
}

export const Notification = (props : NotificationProps) => {
    const {children} = props
    return (
        <Popover>
            <PopoverTrigger>
                <div>{children}</div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col w-full max-w-sm p-4 gap-2 mb-6 text-white bg-gray-100 bg-opacity-50 rounded-lg shadow-lg pointer-events-auto md:p-6 lg:p-8">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-black text-base">NOTIFICACIONES</h1>
                        <BellDot className="stroke-black w-5" />
                    </div>
                    <div>
                        <hr className="mt-2" />
                        <div className="flex items-center justify-between gap-2 p-2">
                            <div className="flex gap-2 p-2">
                                <h1 className="text-black text-xs">Todos</h1>
                                <h1 className="text-black text-xs">No leidos</h1>
                            </div>
                            <Trash2 className="stroke-black w-5" />
                        </div>
                        <hr />
                    </div>
                    <div className="flex items-start justify-between gap-2 p-4 bg-gray-50 shadow-lg rounded-md">
                        <div>
                            <h1 className="font-semibold text-black text-sm">Title</h1>
                            <p className="text-black text-xs">Messages default</p>
                        </div>
                        <Checkbox />
                    </div>
                    <div className="flex items-start justify-between gap-2 p-4 bg-gray-50 shadow-lg rounded-md">
                        <div className="flex gap-2">
                            <div className="w-8 h-8">
                                <img src="/img/avatar.jpg" alt="" className="rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-black text-sm">Title</h1>
                                <p className="text-black text-xs">Messages default</p>
                            </div>
                        </div>
                        <Checkbox />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}