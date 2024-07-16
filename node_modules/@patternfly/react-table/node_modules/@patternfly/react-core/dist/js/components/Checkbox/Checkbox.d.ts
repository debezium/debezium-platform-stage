import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { OUIAProps } from '../../helpers';
export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
    /** Additional classes added to the checkbox wrapper. This wrapper will be div element by default. It will be a label element if
     * isLabelWrapped is true, or it can be overridden by any element specified in the component prop.
     */
    className?: string;
    /** Additional classes added to the checkbox input. */
    inputClassName?: string;
    /** Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified. */
    isLabelWrapped?: boolean;
    /** Flag to show if the checkbox selection is valid or invalid. */
    isValid?: boolean;
    /** Flag to show if the checkbox is disabled. */
    isDisabled?: boolean;
    /** Flag to show if the checkbox is required. */
    isRequired?: boolean;
    /** Flag to show if the checkbox is checked. If null, the checkbox will be indeterminate (partially checked). */
    isChecked?: boolean | null;
    checked?: boolean;
    /** A callback for when the checkbox selection changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
    /** Label text of the checkbox. */
    label?: React.ReactNode;
    /** Sets the position of the label. Defaults to 'end' (after the checkbox input). */
    labelPosition?: 'start' | 'end';
    /** Id of the checkbox. */
    id: string;
    /** Aria-label of the checkbox. */
    'aria-label'?: string;
    /** Description text of the checkbox. */
    description?: React.ReactNode;
    /** Body text of the checkbox */
    body?: React.ReactNode;
    /** Sets the checkbox wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
    component?: React.ElementType;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface CheckboxState {
    ouiaStateId: string;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static displayName: string;
    static defaultProps: PickOptional<CheckboxProps>;
    constructor(props: any);
    private handleChange;
    render(): React.JSX.Element;
}
export { Checkbox };
//# sourceMappingURL=Checkbox.d.ts.map