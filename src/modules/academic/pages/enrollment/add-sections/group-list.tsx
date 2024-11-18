"use client"

// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { CircleCheckBig, CircleDot } from "lucide-react"
import { useState } from "react"
import { CourseGroupCard } from "./course-group-card"

interface CourseGroup {
    id: string
    name: string
    teacher: string
    schedule: string
    shift: string
    spots: {
        taken: number
        total: number
    }
    available: boolean
}

export interface Course {
    id: string
    code: string
    name: string
    groups: CourseGroup[]
    selected?: boolean
}

interface IProps {
    courses: Course[]
}

export default function GroupList({ courses }: IProps) {
    const [selectedGroups, setSelectedGroups] = useState<{
        [courseId: string]: string;
    }>({});

    const handleGroupSelection = (courseId: string, groupId: string) => {
        setSelectedGroups((prev) => ({
            ...prev,
            [courseId]: groupId,
        }));
    };

    return (
        <div className="w-full h-full overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Grupos disponibles</h2>
            <Accordion type="single" collapsible className="space-y-2">
                {courses.map((course) => (
                    <AccordionItem
                        key={course.id}
                        value={course.id}
                        className={cn(
                            "border border-none rounded-sm",
                        )}
                    >
                        <AccordionTrigger className={
                            cn(
                                "px-4 hover:no-underline [&[data-state=open]>div>svg]:rotate-180 border-b py-2",
                                selectedGroups[course.id] ? "bg-success-50" : " bg-default-100"
                            )
                        }>
                            <section className="flex items-center gap-4 w-full">
                                <div className={
                                    cn(
                                        "rounded-md p-1",
                                        selectedGroups[course.id] ? "bg-success-700 border text-white border-success-800" : "text-muted-foreground border border-black"
                                    )
                                }>
                                    {selectedGroups[course.id] ? <CircleCheckBig /> : <CircleDot />}
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <div className="text-sm font-bold text-muted-foreground">{course.code}</div>
                                    <div className={
                                        cn(
                                            "text-base font-semibold",
                                            selectedGroups[course.id] ? "text-success-800" : "text-default-foreground"
                                        )
                                    }>
                                        {course.name}
                                    </div>
                                </div>
                            </section>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <CourseGroupCard
                                course={course}
                                selectedGroups={selectedGroups}
                                handleGroupSelection={handleGroupSelection}
                            />
                            {/* <RadioGroup
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
                                            <RadioGroupItem
                                                value={group.id}
                                                id={group.id}
                                            />
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
                                                    <div className="text-sm text-right">
                                                        <div className="text-muted-foreground">Plazas</div>
                                                        <div className="flex items-center gap-2">
                                                            <span>{group.spots.taken}/{group.spots.total}</span>
                                                            {group.available && (
                                                                <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                                                    Disponible
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                ))}
                            </RadioGroup> */}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}