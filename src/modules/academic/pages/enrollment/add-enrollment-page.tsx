'use client'

import { MultiStepTimeline } from '@/components/app';
import { AsideLayoutFormContent, LayoutFormContent } from '@/components/layouts';
import { useFilterFromUrl } from '@/lib/filter-url';
import { buttonLabels } from '@/lib/constants';
import { enrollmentSteps } from './sections/enrollment-steps';

export default function AddEnrollmentPage () {
  const { getParams, createFilter, removeFilter } = useFilterFromUrl();

  const currentStep = getParams({ key: 'step', value: '' }) || enrollmentSteps[0].id;

  const handleSelectStep = (index: string) => {
    createFilter({ key: 'step', value: index });
  }

  const labelOnSubmit =
    currentStep === enrollmentSteps[enrollmentSteps.length - 1].id
      ? buttonLabels.labelSubmit.finish
      : buttonLabels.labelSubmit.next;
  const labelOnCancel =
    currentStep === enrollmentSteps[0].id
      ? buttonLabels.labelCancel.cancel
      : buttonLabels.labelCancel.back;

  const handleOnCancel = () => {
    if (currentStep === enrollmentSteps[0].id) {
      removeFilter({ key: 'step' });
    } else {
      const previousStepIndex = enrollmentSteps.findIndex(step => step.id === currentStep) - 1;
      const previousStepId = enrollmentSteps[previousStepIndex]?.id || enrollmentSteps[0].id;
      createFilter({ key: 'step', value: previousStepId });
    }
  };

  const currentStepContent = enrollmentSteps.find(step => step.id === currentStep)?.content;

  return (
    <div>
      <LayoutFormContent
        title="Matrícular estudiante"
        position="left"
        labelOnSubmit={labelOnSubmit}
        labelOnCancel={labelOnCancel}
        onCancel={handleOnCancel}
        onSubmit={() => handleSelectStep(currentStep)}
      >
        <AsideLayoutFormContent>
          <MultiStepTimeline
            selectedStep={currentStep}
            setSelectedStep={handleSelectStep}
            steps={enrollmentSteps}
          />
        </AsideLayoutFormContent>
        <section>{currentStepContent}</section>
      </LayoutFormContent>
    </div>
  );
};
