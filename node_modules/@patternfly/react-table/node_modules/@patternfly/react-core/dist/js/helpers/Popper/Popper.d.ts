import * as React from 'react';
import { Placement } from './thirdparty/popper-core';
import '@patternfly/react-styles/css/components/Popper/Popper.css';
export declare const getOpacityTransition: (animationDuration: number) => string;
export interface PopperProps {
    /**
     * Trigger reference element to which the popper is relatively placed to.
     */
    trigger?: React.ReactNode;
    /**
     * A reference to the trigger reference element that can be passed instead of or along
     * with the trigger prop. When passed along with the trigger prop, the div element that
     * wraps the trigger will be removed.
     */
    triggerRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
    /** The popper (menu/tooltip/popover) element */
    popper: React.ReactElement;
    /**
     * Reference to the popper (menu/tooltip/popover) element.
     * Passing this prop will remove the wrapper div element from the popper.
     */
    popperRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
    /** popper direction */
    direction?: 'up' | 'down';
    /** popper position */
    position?: 'right' | 'left' | 'center' | 'start' | 'end';
    /** Instead of direction and position can set the placement of the popper */
    placement?: Placement;
    /** Custom width of the popper. If the value is "trigger", it will set the width to the trigger element's width */
    width?: string | 'trigger';
    /** Minimum width of the popper. If the value is "trigger", it will set the min width to the trigger element's width */
    minWidth?: string | 'trigger';
    /** Maximum width of the popper. If the value is "trigger", it will set the max width to the trigger element's width */
    maxWidth?: string | 'trigger';
    /** The container to append the popper to. Defaults to 'inline'. */
    appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
    /** z-index of the popper element */
    zIndex?: number;
    /** True to make the popper visible */
    isVisible?: boolean;
    /**
     * Map class names to positions, for example:
     * {
     *   top: styles.modifiers.top,
     *   bottom: styles.modifiers.bottom,
     *   left: styles.modifiers.left,
     *   right: styles.modifiers.right
     * }
     */
    positionModifiers?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
        topStart?: string;
        topEnd?: string;
        bottomStart?: string;
        bottomEnd?: string;
        leftStart?: string;
        leftEnd?: string;
        rightStart?: string;
        rightEnd?: string;
    };
    /** Distance of the popper to the trigger */
    distance?: number;
    /** Callback function when mouse enters trigger */
    onMouseEnter?: (event?: MouseEvent) => void;
    /** Callback function when mouse leaves trigger */
    onMouseLeave?: (event?: MouseEvent) => void;
    /** Callback function when trigger is focused */
    onFocus?: (event?: FocusEvent) => void;
    /** Callback function when trigger is blurred (focus leaves) */
    onBlur?: (event?: FocusEvent) => void;
    /** Callback function when trigger is clicked */
    onTriggerClick?: (event?: MouseEvent) => void;
    /** Callback function when Enter key is used on trigger */
    onTriggerEnter?: (event?: KeyboardEvent) => void;
    /** Callback function when popper is clicked */
    onPopperClick?: (event?: MouseEvent) => void;
    /** Callback function when mouse enters popper content */
    onPopperMouseEnter?: (event?: MouseEvent) => void;
    /** Callback function when mouse leaves popper content */
    onPopperMouseLeave?: (event?: MouseEvent) => void;
    /** Callback function when document is clicked */
    onDocumentClick?: (event?: MouseEvent, triggerElement?: HTMLElement, popperElement?: HTMLElement) => void;
    /** Callback function when keydown event occurs on document */
    onDocumentKeyDown?: (event?: KeyboardEvent) => void;
    /** Enable to flip the popper when it reaches the boundary */
    enableFlip?: boolean;
    /** The behavior of how the popper flips when it reaches the boundary */
    flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end')[];
    /** The duration of the CSS fade transition animation. */
    animationDuration?: number;
    /** Delay in ms before the popper appears */
    entryDelay?: number;
    /** Delay in ms before the popper disappears */
    exitDelay?: number;
    /** Callback when popper's hide transition has finished executing */
    onHidden?: () => void;
    /**
     * Lifecycle function invoked when the popper begins to transition out.
     */
    onHide?: () => void;
    /**
     * Lifecycle function invoked when the popper has been mounted to the DOM.
     */
    onMount?: () => void;
    /**
     * Lifecycle function invoked when the popper begins to transition in.
     */
    onShow?: () => void;
    /**
     * Lifecycle function invoked when the popper has fully transitioned in.
     */
    onShown?: () => void;
    /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
    preventOverflow?: boolean;
}
export declare const Popper: React.FunctionComponent<PopperProps>;
//# sourceMappingURL=Popper.d.ts.map