import * as React from 'react';
import { WizardStep } from './Wizard';
export interface WizardBodyProps {
    /** Anything that can be rendered in the Wizard body */
    children: any;
    /** Set to true to remove the default body padding */
    hasNoBodyPadding: boolean;
    /** Adds an accessible name to the wizard body when the body content overflows and renders
     * a scrollbar.
     */
    'aria-label'?: string;
    /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
     * The aria-labelledby will only be applied when the body content overflows and renders a scrollbar.
     */
    'aria-labelledby': string;
    /** Component used as the primary content container */
    mainComponent?: React.ElementType;
    /** The currently active WizardStep */
    activeStep: WizardStep;
    hasDrawer?: boolean;
    /** Flag indicating the wizard drawer is expanded */
    isDrawerExpanded?: boolean;
    /** Callback function for when the drawer is toggled */
    onExpandDrawer?: () => void;
}
export declare const WizardBody: React.FunctionComponent<WizardBodyProps>;
//# sourceMappingURL=WizardBody.d.ts.map