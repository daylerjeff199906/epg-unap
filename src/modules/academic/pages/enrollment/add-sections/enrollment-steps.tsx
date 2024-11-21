import { IStepper } from "@/components/app/multi-step-timeline";
import { SelectExpedientForm } from "./select-expedient-form";
import { SelectCourseForm } from "./select-course-form";
import { SelectGroupForm } from "./select-group-form";
import { ResumeStep } from "./resume-step";

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
    content: <SelectGroupForm />,
  },
  {
    id: 'finalizado',
    title: 'Finalizado',
    content: <ResumeStep />
  }
];