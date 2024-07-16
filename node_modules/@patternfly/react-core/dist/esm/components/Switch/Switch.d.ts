import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface SwitchProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
    /** id for the label. */
    id?: string;
    /** Additional classes added to the switch */
    className?: string;
    /** Text value for the visible label */
    label?: React.ReactNode;
    /** Adds an accessible name to the switch when the label prop is not passed, and must describe the isChecked="true" state. */
    'aria-label'?: string;
    /** Adds an accessible name to the switch via one or more referenced id(s). The computed accessible name must describe the isChecked="true" state. */
    'aria-labelledby'?: string;
    /** Flag to show if the switch is checked when it is controlled by React state.
     * To make the switch uncontrolled instead use the defaultChecked prop, but do not use both.
     */
    isChecked?: boolean;
    /** Flag to set the default checked value of the switch when it is uncontrolled by React state.
     * To make the switch controlled instead use the isChecked prop, but do not use both.
     */
    defaultChecked?: boolean;
    /** Flag to show if the switch has a check icon. */
    hasCheckIcon?: boolean;
    /** Flag to show if the switch is disabled. */
    isDisabled?: boolean;
    /** A callback for when the switch selection changes. (event, isChecked) => {} */
    onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
    /** Flag to reverse the layout of toggle and label (label at start, toggle at end). */
    isReversed?: boolean;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
declare class Switch extends React.Component<SwitchProps & OUIAProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    id: string;
    static defaultProps: SwitchProps;
    constructor(props: SwitchProps & OUIAProps);
    render(): React.JSX.Element;
}
export { Switch };
//# sourceMappingURL=Switch.d.ts.map