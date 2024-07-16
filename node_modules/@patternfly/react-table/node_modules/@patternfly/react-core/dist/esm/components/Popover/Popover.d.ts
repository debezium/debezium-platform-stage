import * as React from 'react';
import { ReactElement } from 'react';
export declare enum PopoverPosition {
    auto = "auto",
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right",
    topStart = "top-start",
    topEnd = "top-end",
    bottomStart = "bottom-start",
    bottomEnd = "bottom-end",
    leftStart = "left-start",
    leftEnd = "left-end",
    rightStart = "right-start",
    rightEnd = "right-end"
}
/** The main popover component. The following properties can also be passed into another component
 * that has a property specifically for passing in popover properties.
 */
export interface PopoverProps {
    /** Text announced by screen reader when alert severity variant is set to indicate
     * severity level.
     */
    alertSeverityScreenReaderText?: string;
    /** Severity variants for an alert popover. This modifies the color of the header to
     * match the severity.
     */
    alertSeverityVariant?: 'custom' | 'info' | 'warning' | 'success' | 'danger';
    /** The duration of the CSS fade transition animation. */
    animationDuration?: number;
    /** The element to append the popover to. Defaults to "inline". */
    appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement) | 'inline';
    /** Accessible label for the popover, required when header is not present. */
    'aria-label'?: string;
    /**
     * Body content of the popover. If you want to close the popover after an action within the
     * body content, you can use the isVisible prop for manual control, or you can provide a
     * function which will receive a callback as an argument to hide the popover, i.e.
     * bodyContent={hide => <Button onClick={() => hide()}>Close</Button>}
     */
    bodyContent: React.ReactNode | ((hide: () => void) => React.ReactNode);
    /**
     * The trigger reference element to which the popover is relatively placed to. If you cannot wrap
     * the element with the Popover, you can use the triggerRef prop instead.
     * Usage: <Popover><Button>Reference</Button></Popover>
     */
    children?: ReactElement<any>;
    /**
     * The trigger reference element to which the popover is relatively placed to. If you can wrap the
     * element with the popover, you can use the children prop instead, or both props together.
     * When passed along with the trigger prop, the div element that wraps the trigger will be removed.
     * Usage: <Popover triggerRef={() => document.getElementById('reference-element')} />
     */
    triggerRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
    /** Additional classes added to the popover. */
    className?: string;
    /** Accessible label for the close button. */
    closeBtnAriaLabel?: string;
    /** Distance of the popover to its target. Defaults to 25. */
    distance?: number;
    /** The element to focus when the popover becomes visible. By default the first
     * focusable element will receive focus.
     */
    elementToFocus?: HTMLElement | SVGElement | string;
    /**
     * If true, tries to keep the popover in view by flipping it if necessary.
     * If the position is set to 'auto', this prop is ignored.
     */
    enableFlip?: boolean;
    /**
     * The desired position to flip the popover to if the initial position is not possible.
     * By setting this prop to 'flip' it attempts to flip the popover to the opposite side if
     * there is no space.
     * You can also pass an array of positions that determines the flip order. It should contain
     * the initial position followed by alternative positions if that position is unavailable.
     * Example: Initial position is 'top'. Button with popover is in the top right corner.
     * 'flipBehavior' is set to ['top', 'right', 'left']. Since there is no space to the top, it
     * checks if right is available. There's also no space to the right, so it finally shows the
     * popover on the left.
     */
    flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end')[];
    /**
     * Footer content of the popover. If you want to close the popover after an action within the
     * footer content, you can use the isVisible prop for manual control, or you can provide a
     * function which will receive a callback as an argument to hide the popover, i.e.
     * footerContent={hide => <Button onClick={() => hide()}>Close</Button>}
     */
    footerContent?: React.ReactNode | ((hide: () => void) => React.ReactNode);
    /** Removes fixed-width and allows width to be defined by contents. */
    hasAutoWidth?: boolean;
    /** Allows content to touch edges of popover container. */
    hasNoPadding?: boolean;
    /** Sets the heading level to use for the popover header. Defaults to h6. */
    headerComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Simple header content to be placed within a title. If you want to close the popover after
     * an action within the header content, you can use the isVisible prop for manual control,
     * or you can provide a function which will receive a callback as an argument to hide the
     * popover, i.e. headerContent={hide => <Button onClick={() => hide()}>Close</Button>}
     */
    headerContent?: React.ReactNode | ((hide: () => void) => React.ReactNode);
    /** Icon to be displayed in the popover header. **/
    headerIcon?: React.ReactNode;
    /** Hides the popover when a click occurs outside (only works if isVisible is not controlled
     * by the user).
     */
    hideOnOutsideClick?: boolean;
    /** Id used as part of the various popover elements (popover-${id}-header/body/footer). */
    id?: string;
    /**
     * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
     * By default, the popover child element handles click events automatically. If you want to
     * control this programmatically, the popover will not auto-close if the close button is
     * clicked, the escape key is used, or if a click occurs outside the popover. Instead, the
     * consumer is responsible for closing the popover themselves by adding a callback listener
     * for the shouldClose prop.
     */
    isVisible?: boolean;
    /** Maximum width of the popover (default 18.75rem). */
    maxWidth?: string;
    /** Minimum width of the popover (default 6.25rem). */
    minWidth?: string;
    /**
     * Lifecycle function invoked when the popover has fully transitioned out.
     */
    onHidden?: () => void;
    /**
     * Lifecycle function invoked when the popover begins to transition out.
     */
    onHide?: (event: MouseEvent | KeyboardEvent) => void;
    /**
     * Lifecycle function invoked when the popover has been mounted to the DOM.
     */
    onMount?: () => void;
    /**
     * Lifecycle function invoked when the popover begins to transition in.
     */
    onShow?: (event: MouseEvent | KeyboardEvent) => void;
    /**
     * Lifecycle function invoked when the popover has fully transitioned in.
     */
    onShown?: () => void;
    /**
     * Popover position. Note: With the enableFlip property set to true, it will change the
     * position if there is not enough space for the starting position. The behavior of where it
     * flips to can be controlled through the flipBehavior property.
     */
    position?: PopoverPosition | 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /**
     * Callback function that is only invoked when isVisible is also controlled. Called when the
     * popover close button is clicked, the enter key was used on it, or the escape key is used.
     */
    shouldClose?: (event: MouseEvent | KeyboardEvent, hideFunction?: () => void) => void;
    /**
     * Callback function that is only invoked when isVisible is also controlled. Called when the
     * enter key is used on the focused trigger.
     */
    shouldOpen?: (event: MouseEvent | KeyboardEvent, showFunction?: () => void) => void;
    /** Flag indicating whether the close button should be shown. */
    showClose?: boolean;
    /** Sets an interaction to open popover, defaults to "click" */
    triggerAction?: 'click' | 'hover';
    /** Whether to trap focus in the popover. */
    withFocusTrap?: boolean;
    /** The z-index of the popover. */
    zIndex?: number;
}
export declare const Popover: React.FunctionComponent<PopoverProps>;
//# sourceMappingURL=Popover.d.ts.map