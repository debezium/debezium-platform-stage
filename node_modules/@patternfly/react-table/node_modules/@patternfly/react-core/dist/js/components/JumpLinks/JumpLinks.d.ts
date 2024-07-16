import * as React from 'react';
export interface JumpLinksProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
    /** Whether to center children. */
    isCentered?: boolean;
    /** Whether the layout of children is vertical or horizontal. */
    isVertical?: boolean;
    /** Label to add to nav element. */
    label?: React.ReactNode;
    /** Flag to always show the label when using `expandable` */
    alwaysShowLabel?: boolean;
    /** Adds an accessible label to the internal nav element. Defaults to the value of the label prop. */
    'aria-label'?: string;
    /** Reference to the scrollable element to spy on. Takes precedence over scrollableSelector. Not passing a scrollableRef or scrollableSelector disables spying. */
    scrollableRef?: HTMLElement | (() => HTMLElement) | React.RefObject<HTMLElement>;
    /** Selector for the scrollable element to spy on. Not passing a scrollableSelector or scrollableRef disables spying. */
    scrollableSelector?: string;
    /** The index of the child Jump link to make active. */
    activeIndex?: number;
    /** Children nodes */
    children?: React.ReactNode;
    /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
    offset?: number;
    /** When to collapse/expand at different breakpoints */
    expandable?: {
        default?: 'expandable' | 'nonExpandable';
        sm?: 'expandable' | 'nonExpandable';
        md?: 'expandable' | 'nonExpandable';
        lg?: 'expandable' | 'nonExpandable';
        xl?: 'expandable' | 'nonExpandable';
        '2xl'?: 'expandable' | 'nonExpandable';
    };
    /** On mobile whether or not the JumpLinks starts out expanded */
    isExpanded?: boolean;
    /** Aria label for expandable toggle */
    toggleAriaLabel?: string;
    /** Class for nav */
    className?: string;
}
export declare const JumpLinks: React.FunctionComponent<JumpLinksProps>;
//# sourceMappingURL=JumpLinks.d.ts.map