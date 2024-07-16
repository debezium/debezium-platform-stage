import * as React from 'react';
import { BadgeProps } from '../Badge';
import { OUIAProps } from '../../helpers';
export declare enum MenuToggleStatus {
    success = "success",
    danger = "danger",
    warning = "warning"
}
export type MenuToggleElement = HTMLDivElement | HTMLButtonElement;
export interface SplitButtonOptions {
    /** Elements to display before the toggle button. When included, renders the menu toggle as a split button. */
    items: React.ReactNode[];
    /** Variant of split button toggle */
    variant?: 'action' | 'checkbox';
}
export interface MenuToggleProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLDivElement>, MenuToggleElement>, 'ref'>, OUIAProps {
    /** Content rendered inside the toggle */
    children?: React.ReactNode;
    /** Additional classes added to the toggle */
    className?: string;
    /** Flag indicating the toggle has expanded styling */
    isExpanded?: boolean;
    /** Flag indicating the toggle is disabled */
    isDisabled?: boolean;
    /** Flag indicating the toggle is full height */
    isFullHeight?: boolean;
    /** Flag indicating the toggle takes up the full width of its parent */
    isFullWidth?: boolean;
    /** Object used to configure a split button menu toggle */
    splitButtonOptions?: SplitButtonOptions;
    /** Variant styles of the menu toggle */
    variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
    /** Status styles of the menu toggle */
    status?: 'success' | 'warning' | 'danger';
    /** Overrides the status icon */
    statusIcon?: React.ReactNode;
    /** Optional icon or image rendered inside the toggle, before the children content. It is
     * recommended to wrap most basic icons in our icon component.
     */
    icon?: React.ReactNode;
    /** Optional badge rendered inside the toggle, after the children content */
    badge?: BadgeProps | React.ReactNode;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<MenuToggleElement>;
    /** Value to overwrite the randomly generated data-ouia-component-id. It will always target the toggle button. */
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const MenuToggle: React.ForwardRefExoticComponent<MenuToggleProps & React.RefAttributes<MenuToggleElement>>;
//# sourceMappingURL=MenuToggle.d.ts.map