import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { TooltipPosition } from '../Tooltip';
import { OUIAProps } from '../../helpers';
export declare const clipboardCopyFunc: (_event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void;
export declare enum ClipboardCopyVariant {
    inline = "inline",
    expansion = "expansion",
    inlineCompact = "inline-compact"
}
export interface ClipboardCopyState {
    text: string;
    expanded: boolean;
    copied: boolean;
    textWhenExpanded: string;
}
export interface ClipboardCopyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'children'>, OUIAProps {
    /** Additional classes added to the clipboard copy container. */
    className?: string;
    /** Tooltip message to display when hover the copy button */
    hoverTip?: string;
    /** Tooltip message to display when clicking the copy button */
    clickTip?: string;
    /** Aria-label to use on the TextInput. */
    textAriaLabel?: string;
    /** Aria-label to use on the ClipboardCopyToggle. */
    toggleAriaLabel?: string;
    /** Flag to show if the input is read only. */
    isReadOnly?: boolean;
    /** Flag to determine if clipboard copy is in the expanded state initially */
    isExpanded?: boolean;
    /** Flag to determine if clipboard copy content includes code */
    isCode?: boolean;
    /** Flag to determine if inline clipboard copy should be block styling */
    isBlock?: boolean;
    /** Adds Clipboard Copy variant styles. */
    variant?: typeof ClipboardCopyVariant | 'inline' | 'expansion' | 'inline-compact';
    /** Copy button tooltip position. */
    position?: TooltipPosition | 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /** Maximum width of the tooltip (default 150px). */
    maxWidth?: string;
    /** Delay in ms before the tooltip disappears. */
    exitDelay?: number;
    /** Delay in ms before the tooltip appears. */
    entryDelay?: number;
    /** A function that is triggered on clicking the copy button. This will replace the existing clipboard copy functionality entirely. */
    onCopy?: (event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void;
    /** A function that is triggered on changing the text. */
    onChange?: (event: React.FormEvent, text?: string) => void;
    /** The text which is copied. */
    children: string;
    /** Additional actions for inline clipboard copy. Should be wrapped with ClipboardCopyAction. */
    additionalActions?: React.ReactNode;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
declare class ClipboardCopy extends React.Component<ClipboardCopyProps, ClipboardCopyState> {
    static displayName: string;
    timer: number;
    constructor(props: ClipboardCopyProps);
    static defaultProps: PickOptional<ClipboardCopyProps>;
    componentDidUpdate: (prevProps: ClipboardCopyProps, prevState: ClipboardCopyState) => void;
    componentWillUnmount: () => void;
    expandContent: (_event: React.MouseEvent<Element, MouseEvent>) => void;
    updateText: (event: React.FormEvent, text: string) => void;
    updateTextWhenExpanded: (event: React.FormEvent, text: string) => void;
    render: () => React.JSX.Element;
}
export { ClipboardCopy };
//# sourceMappingURL=ClipboardCopy.d.ts.map