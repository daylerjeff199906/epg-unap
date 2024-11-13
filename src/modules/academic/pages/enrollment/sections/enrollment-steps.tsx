import { IStepper } from "@/components/app/multi-step-timeline";
import { SearchFilter } from "@/modules/academic/components";

export const enrollmentSteps: IStepper[] = [
    {
      id: 'seleccionar-expediente',
      title: 'Seleccionar expediente',
      content: 'hola',
    },
    {
      id: 'selecccionar-cursos',
      title: 'Seleccionar cursos',
      content: 'holli',
    },
    {
      id: 'seleccionar-grupo-finalizar',
      title: 'Seleccionar grupo y finalizar',
      content: <SearchFilter />,
    },
    {
      id: 'finalizar-matricula',
      title: 'Finalizar matrícula',
      content: 'holli',
    }
  ];