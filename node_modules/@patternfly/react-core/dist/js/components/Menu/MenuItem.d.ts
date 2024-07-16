import * as React from 'react';
import { TooltipProps } from '../Tooltip';
export interface MenuItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
    /** Content rendered inside the menu list item. */
    children?: React.ReactNode;
    /** Additional classes added to the menu list item */
    className?: string;
    /** Identifies the component in the Menu onSelect or onActionClick callback */
    itemId?: any;
    /** Target navigation link. Should not be used if the flyout prop is defined. */
    to?: string;
    /** Navigation link target. Only set when the to property is present. If isExternalLink is also passed in, this property will be set to "_blank". */
    target?: string;
    /** Navigation link relationship. Only set when the to property is present. */
    rel?: string;
    /** Navigation link download. Only set when the to property is present. */
    download?: string;
    /** Flag indicating the item has a checkbox */
    hasCheckbox?: boolean;
    /** Flag indicating whether the item is active */
    isActive?: boolean;
    /** Flag indicating if the item is favorited */
    isFavorited?: boolean;
    /** Flag indicating if the item causes a load */
    isLoadButton?: boolean;
    /** Flag indicating a loading state */
    isLoading?: boolean;
    /** Callback for item click */
    onClick?: (event?: any) => void;
    /** Component used to render the menu item */
    component?: React.ElementType<any> | React.ComponentType<any>;
    /** Render item as disabled option */
    isDisabled?: boolean;
    /** Render item as aria-disabled option */
    isAriaDisabled?: boolean;
    /** Props for adding a tooltip to a menu item */
    tooltipProps?: TooltipProps;
    /** Render item with icon */
    icon?: React.ReactNode;
    /** Render item with one or more actions */
    actions?: React.ReactNode;
    /** Description of the menu item */
    description?: React.ReactNode;
    /** Render an external link icon on focus or hover, and set the link's
     * "target" attribute to a value of "_blank".
     */
    isExternalLink?: boolean;
    /** Flag indicating if the option is selected */
    isSelected?: boolean;
    /** Flag indicating the item is focused */
    isFocused?: boolean;
    /** Flag indicating the item is in danger state */
    isDanger?: boolean;
    /** Flyout menu. Should not be used if the to prop is defined. */
    flyoutMenu?: React.ReactElement;
    /** Callback function when mouse leaves trigger */
    onShowFlyout?: (event?: any) => void;
    /** Drilldown menu of the item. Should be a Menu or DrilldownMenu type. */
    drilldownMenu?: React.ReactNode | (() => React.ReactNode);
    /** Sub menu direction */
    direction?: 'down' | 'up';
    /** True if item is on current selection path */
    isOnPath?: boolean;
    /** Adds an accessible name to the menu item. */
    'aria-label'?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
    /** Sets the id attribute on the menu item component. */
    id?: string;
}
export declare const MenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=MenuItem.d.ts.map