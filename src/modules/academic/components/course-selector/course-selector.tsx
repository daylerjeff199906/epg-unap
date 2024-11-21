'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface ICourse {
    id: string;
    code: string;
    name: string;
    credits: number;
}

interface IProps {
    course?: ICourse;
}

export const CourseSelector = (props: IProps) => {
    const { course } = props;

    const [selected, setSelected] = useState(false);

    if (!course) {
        return null;
    }

    return (
        <label
            key={course.id}
            htmlFor={course.id}
            className={cn(
                "flex items-center gap-4 p-4 rounded-sm cursor-pointer transition-colors",
                selected
                    ? "bg-blue-50 border-l-4 border-primary"
                    : "hover:border-l-4 hover:border hover:border-t hover:transition-colors hover:border-gray-300 transition-colors"
            )}
        >
            <Checkbox
                className="h-5 w-5"
                id={course.id}
                checked={selected}
                onCheckedChange={(checked) => setSelected(checked === true)}
            />
            <div className="grid grid-cols-[1fr,2fr,1fr] flex-1 gap-4 text-sm">
                <div>
                    <p className="text-muted-foreground text-xs">Cod</p>
                    <p className="text-sm font-bold">{course.code}</p>
                </div>
                <div>
                    <p className="text-muted-foreground text-xs">Curso</p>
                    <p className="text-sm font-bold">{course.name}</p>
                </div>
                <div>
                    <p className="text-muted-foreground text-xs">Créditos</p>
                    <p className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-bold">
                        {course.credits} cred.
                    </p>
                </div>
            </div>
        </label>
    );
};
