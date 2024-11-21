import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Course } from "./group-list"
import { cn } from "@/lib/utils"

interface IProps {
    course: Course
    selectedGroups: { [courseId: string]: string }
    handleGroupSelection: (courseId: string, groupId: string) => void
    hasRadioGroup?: boolean
    hasPlazas?: boolean
}

export const CourseGroupCard = (props: IProps) => {
    const { 
        course, 
        selectedGroups, 
        handleGroupSelection, 
        hasRadioGroup = true,
        hasPlazas = true
    } = props

    return (
        <>
            <RadioGroup
                value={selectedGroups[course.id] || ""}
                onValueChange={(groupId) =>
                    handleGroupSelection(course.id, groupId)
                }
                className="px-4 pb-4"
            >
                {course.groups.map((group) => (
                    <div
                        key={group.id}
                        className={cn(
                            "border rounded-sm p-4",
                            selectedGroups[course.id] === group.id && "bg-primary-50"
                        )}
                    >
                        <section className="flex items-center gap-4">
                            {
                                hasRadioGroup && (
                                    <RadioGroupItem
                                        value={group.id}
                                        id={group.id}
                                    />
                                )
                            }
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-bold">
                                            {course.name} - {group.name}
                                        </p>
                                        <div className="text-xs text-muted-foreground">
                                            <div>DOCENTE: {group.teacher}</div>
                                            <div className="flex gap-8">
                                                <span>HORARIO: {group.schedule}</span>
                                                <span>TURNO: {group.shift}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        hasPlazas && (<div className="text-sm text-right">
                                            <div className="text-muted-foreground">Plazas</div>
                                            <div className="flex items-center gap-2">
                                                <span>{group.spots.taken}/{group.spots.total}</span>
                                                {group.available && (
                                                    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                                        Disponible
                                                    </span>
                                                )}
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </RadioGroup>
        </>
    )
}
