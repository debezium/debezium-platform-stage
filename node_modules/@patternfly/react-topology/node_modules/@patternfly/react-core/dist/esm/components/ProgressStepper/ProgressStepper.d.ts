import * as React from 'react';
export interface ProgressStepperProps extends React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {
    /** Content rendered inside the progress stepper. */
    children?: React.ReactNode;
    /** Additional classes applied to the progress stepper container. */
    className?: string;
    /** Flag indicating the progress stepper should be centered. */
    isCenterAligned?: boolean;
    /** Flag indicating the progress stepper has a vertical layout. */
    isVertical?: boolean;
    /** Flag indicating the progress stepper should be rendered compactly. */
    isCompact?: boolean;
    /** Adds an accessible label to the progress stepper. */
    'aria-label'?: string;
}
export declare const ProgressStepper: React.FunctionComponent<ProgressStepperProps>;
//# sourceMappingURL=ProgressStepper.d.ts.map