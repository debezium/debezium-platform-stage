import * as React from 'react';
/** Creates an individual option that can be selected and moved between the
 * dual list selector panes. This is contained within the DualListSelectorList sub-component.
 */
export interface DualListSelectorListItemProps extends React.HTMLProps<HTMLLIElement> {
    /** Content rendered inside the dual list selector. */
    children?: React.ReactNode;
    /** Additional classes applied to the dual list selector. */
    className?: string;
    /** Flag indicating the list item is currently selected. */
    isSelected?: boolean;
    /** Callback fired when an option is selected. */
    onOptionSelect?: (event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, id?: string) => void;
    /** ID of the option. */
    id?: string;
    /** @hide Internal field used to keep track of order of unfiltered options. */
    orderIndex?: number;
    /** @hide Forwarded ref */
    innerRef?: React.RefObject<HTMLLIElement>;
    /** Flag indicating this item is draggable for reordering. */
    isDraggable?: boolean;
    /** Accessible label for the draggable button on draggable list items. */
    draggableButtonAriaLabel?: string;
    /** Flag indicating if the dual list selector is in a disabled state. */
    isDisabled?: boolean;
}
export declare const DualListSelectorListItemBase: React.FunctionComponent<DualListSelectorListItemProps>;
export declare const DualListSelectorListItem: React.ForwardRefExoticComponent<Omit<DualListSelectorListItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=DualListSelectorListItem.d.ts.map