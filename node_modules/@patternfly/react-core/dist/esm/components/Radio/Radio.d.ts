import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { OUIAProps } from '../../helpers';
export interface RadioProps extends Omit<React.HTMLProps<HTMLInputElement>, 'disabled' | 'label' | 'onChange' | 'type'>, OUIAProps {
    /** Additional classes added to the radio wrapper. This wrapper will be div element by default. It will be a label element if
     * isLabelWrapped is true, or it can be overridden by any element specified in the component prop.
     */
    className?: string;
    /** Additional classes added to the radio input. */
    inputClassName?: string;
    /** Id of the radio. */
    id: string;
    /** Flag to indicate whether the radio wrapper element is a native label element for the radio input. Will not apply if a component prop (with a value other than a "label") is specified. */
    isLabelWrapped?: boolean;
    /** Flag to show if the radio is checked. */
    checked?: boolean;
    /** Flag to show if the radio is checked. */
    isChecked?: boolean;
    /** Flag to show if the radio is disabled. */
    isDisabled?: boolean;
    /** Flag to show if the radio selection is valid or invalid. */
    isValid?: boolean;
    /** Label text of the radio. */
    label?: React.ReactNode;
    /** Sets the position of the label. Defaults to 'end' (after the radio input). */
    labelPosition?: 'start' | 'end';
    /** Name for group of radios */
    name: string;
    /** A callback for when the radio selection changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
    /** Aria label for the radio. */
    'aria-label'?: string;
    /** Description text of the radio. */
    description?: React.ReactNode;
    /** Body of the radio. */
    body?: React.ReactNode;
    /** Sets the radio wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
    component?: React.ElementType;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
declare class Radio extends React.Component<RadioProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    static defaultProps: PickOptional<RadioProps>;
    constructor(props: RadioProps);
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): React.JSX.Element;
}
export { Radio };
//# sourceMappingURL=Radio.d.ts.map