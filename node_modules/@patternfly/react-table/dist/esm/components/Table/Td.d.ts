import * as React from 'react';
import { BaseCellProps } from './Table';
import { TdActionsType, TdCompoundExpandType, TdDraggableType, TdExpandType, TdFavoritesType, TdSelectType, TdTreeRowType } from './base/types';
export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
    /**
     * The column header the cell corresponds to.
     * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
     */
    dataLabel?: string;
    /** Renders a checkbox or radio select */
    select?: TdSelectType;
    /** Turns the cell into an actions cell. Recommended to use an ActionsColumn component as a child of the Td rather than this prop. */
    actions?: TdActionsType;
    /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
    expand?: TdExpandType;
    /** Turns the cell into a compound expansion toggle */
    compoundExpand?: TdCompoundExpandType;
    /** Turns the cell into a favorites cell with a star button */
    favorites?: TdFavoritesType;
    /** Turns the cell into the first cell in a tree table row */
    treeRow?: TdTreeRowType;
    /** Turns the cell into the first cell in a draggable row*/
    draggableRow?: TdDraggableType;
    /** True to remove padding */
    noPadding?: boolean;
    /** Applies pf-v6-c-table__action to td */
    isActionCell?: boolean;
    /**
     * Tooltip to show on the body cell.
     * Note: If the body cell is truncated and has simple string content, it will already attempt to display the cell text.
     * If you want to show a tooltip that differs from the cell text, you can set it here.
     * To disable it completely you can set it to null.
     */
    tooltip?: React.ReactNode;
    /** Callback on mouse enter */
    onMouseEnter?: (event: any) => void;
    /** Indicates the column should be sticky */
    isStickyColumn?: boolean;
    /** Adds a border to the right side of the cell */
    hasRightBorder?: boolean;
    /** Adds a border to the left side of the cell */
    hasLeftBorder?: boolean;
    /** Minimum width for a sticky column */
    stickyMinWidth?: string;
    /** Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column. */
    stickyLeftOffset?: string;
    /** Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column. */
    stickyRightOffset?: string;
}
export declare const Td: React.ForwardRefExoticComponent<Omit<TdProps, "ref"> & React.RefAttributes<HTMLTableDataCellElement>>;
//# sourceMappingURL=Td.d.ts.map