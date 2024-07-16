import React from 'react';
import { ButtonProps } from '../Button';
/** A help button to be passed to the FormGroup's labelHelp property. This should be wrapped or linked
 * to our Popover component.
 */
export interface FormGroupLabelHelpProps extends ButtonProps {
    /** Adds an accessible name for the help button. */
    'aria-label': string;
    /** Additional classes added to the help button. */
    className?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLSpanElement>;
}
export declare const FormGroupLabelHelp: React.ForwardRefExoticComponent<FormGroupLabelHelpProps & React.RefAttributes<any>>;
//# sourceMappingURL=FormGroupLabelHelp.d.ts.map