import { IStepper } from "@/components/app/multi-step-timeline";
import { SearchFilter } from "@/modules/academic/components";
import { SelectExpedientForm } from "./select-expedient-form";
import { SelectCourseForm } from "./select-course-form";

export const enrollmentSteps: IStepper[] = [
  {
    id: 'seleccionar-expediente',
    title: 'Seleccionar expediente',
    content: <SelectExpedientForm />
  },
  {
    id: 'selecccionar-cursos',
    title: 'Seleccionar cursos',
    content: <SelectCourseForm />
  },
  {
    id: 'seleccionar-grupo-finalizar',
    title: 'Seleccionar grupo y finalizar',
    content: <SearchFilter />,
  },
];