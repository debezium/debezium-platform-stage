import * as React from 'react';
export interface FormGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
    /** Anything that can be rendered as FormGroup content. */
    children?: React.ReactNode;
    /** Additional classes added to the FormGroup. */
    className?: string;
    /** Label text before the field. */
    label?: React.ReactNode;
    /** Additional label information displayed after the label. */
    labelInfo?: React.ReactNode;
    /** A help button for the label. We recommend using FormGroupLabelHelp element as a help icon button. The help button should be wrapped or linked to our popover component. */
    labelHelp?: React.ReactElement;
    /** Sets the FormGroup required. */
    isRequired?: boolean;
    /** Sets the FormGroup isInline. */
    isInline?: boolean;
    /** Sets the FormGroupControl to be stacked */
    isStack?: boolean;
    /** Removes top spacer from label. */
    hasNoPaddingTop?: boolean;
    /** ID of an individual field or a group of multiple fields. Required when a role of "group" or "radiogroup" is passed in.
     * If only one field is included, its ID attribute and this prop must be the same.
     */
    fieldId?: string;
    /** Sets the role of the form group. Pass in "radiogroup" when the form group contains multiple
     * radio inputs, or pass in "group" when the form group contains multiple of any other input type.
     */
    role?: string;
}
export declare const FormGroup: React.FunctionComponent<FormGroupProps>;
//# sourceMappingURL=FormGroup.d.ts.map