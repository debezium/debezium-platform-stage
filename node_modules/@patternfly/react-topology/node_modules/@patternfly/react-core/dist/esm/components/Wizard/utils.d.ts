import React from 'react';
import { WizardStepType } from './types';
import { WizardStepProps } from './WizardStep';
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardStepType[]
 */
export declare const buildSteps: (children: React.ReactNode) => WizardStepType[];
export declare function isWizardStep(child: any | React.ReactElement<WizardStepProps>): child is React.ReactElement<WizardStepProps>;
export declare const normalizeStepProps: ({ children: _children, steps: _steps, ...controlStep }: WizardStepProps) => Omit<WizardStepType, 'index'>;
/**
 * Determines whether a step is navigable based on disabled/hidden properties
 * @param steps All steps
 * @param step
 * @returns boolean
 */
export declare const isStepEnabled: (steps: WizardStepType[], step: WizardStepType) => boolean;
//# sourceMappingURL=utils.d.ts.map