import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare enum TextInputTypes {
    text = "text",
    date = "date",
    datetimeLocal = "datetime-local",
    email = "email",
    month = "month",
    number = "number",
    password = "password",
    search = "search",
    tel = "tel",
    time = "time",
    url = "url"
}
export declare enum TextInputReadOnlyVariant {
    default = "default",
    plain = "plain"
}
export interface TextInputExpandedObj {
    /** Flag to apply expanded styling. */
    isExpanded: boolean;
    /** Id of the element that the text input is controlling expansion of. */
    ariaControls: string;
}
export interface TextInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'>, OUIAProps {
    /** Additional classes added to the text input. */
    className?: string;
    /** Flag to show if the text input is disabled. */
    isDisabled?: boolean;
    /** @deprecated Flag to apply expanded styling. expandedProps should now be used instead. */
    isExpanded?: boolean;
    /** Prop to apply expanded styling to the text input and link it to the element it is controlling. This should be used when the input controls a menu and that menu is expandable. */
    expandedProps?: TextInputExpandedObj;
    /** Sets the input as readonly and determines the readonly styling. */
    readOnlyVariant?: 'plain' | 'default';
    /** Flag indicating whether the input is required */
    isRequired?: boolean;
    /** Value to indicate if the text input is modified to show that validation state.
     * If set to success, text input will be modified to indicate valid state.
     * If set to error, text input will be modified to indicate error state.
     */
    validated?: 'success' | 'warning' | 'error' | 'default';
    /** A callback for when the text input value changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
    /** Type that the text input accepts. */
    type?: 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';
    /** Value of the text input. */
    value?: string | number;
    /** Placeholder of the text input when there is no value */
    placeholder?: string;
    /** Aria-label. The text input requires an associated id or aria-label. */
    'aria-label'?: string;
    /** @hide A reference object to attach to the text input box. */
    innerRef?: React.RefObject<any>;
    /** @deprecated Use isStartTruncated instead. Trim text at start */
    isLeftTruncated?: boolean;
    /** Trim text at start */
    isStartTruncated?: boolean;
    /** Callback function when text input is focused */
    onFocus?: (event?: any) => void;
    /** Callback function when text input is blurred (focus leaves) */
    onBlur?: (event?: any) => void;
    /** Custom icon to render. If the validated prop is also passed, this will render an icon in addition to a validated icon. */
    customIcon?: React.ReactNode;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface TextInputState {
    ouiaStateId: string;
}
export declare class TextInputBase extends React.Component<TextInputProps, TextInputState> {
    static displayName: string;
    static defaultProps: TextInputProps;
    inputRef: React.RefObject<HTMLInputElement>;
    observer: any;
    constructor(props: TextInputProps);
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    restoreText: () => void;
    onFocus: (event?: any) => void;
    onBlur: (event?: any) => void;
    render(): React.JSX.Element;
    private sanitizeInputValue;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextInput.d.ts.map