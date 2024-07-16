import * as React from 'react';
import { ThInfoType, ThSelectType, ThExpandType, ThSortType } from './base/types';
import { TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { BaseCellProps } from './Table';
export interface ThProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect' | 'width'> {
    /**
     * The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.
     * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
     */
    dataLabel?: string;
    /** Renders a checkbox select so that all row checkboxes can be selected/deselected */
    select?: ThSelectType;
    /** Renders a chevron so that all row chevrons can be expanded/collapsed */
    expand?: ThExpandType;
    /** Formats the header so that its column will be sortable */
    sort?: ThSortType;
    /**
     * Tooltip to show on the header cell.
     * Note: If the header cell is truncated and has simple string content, it will already attempt to display the header text.
     * If you want to show a tooltip that differs from the header text, you can set it here.
     * To disable it completely you can set it to null.
     */
    tooltip?: React.ReactNode;
    /** other props to pass to the tooltip */
    tooltipProps?: Omit<TooltipProps, 'content'>;
    /** Callback on mouse enter */
    onMouseEnter?: (event: any) => void;
    /** Adds tooltip/popover info button */
    info?: ThInfoType;
    /** Adds scope to the column to associate header cells with data cells*/
    scope?: string;
    /** Indicates the header column should be sticky */
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
    /** Indicates the <th> is part of a subheader of a nested header */
    isSubheader?: boolean;
    /** Visually hidden text accessible only via assistive technologies. This must be passed in if the
     * th is intended to be visually empty, and must be conveyed as a column header text.
     */
    screenReaderText?: string;
    /** Provides an accessible name to the th. This should only be passed in when the th contains only non-text
     * content, such as a "select all" checkbox or "expand all" toggle.
     */
    'aria-label'?: string;
}
export declare const Th: React.ForwardRefExoticComponent<Omit<ThProps, "ref"> & React.RefAttributes<HTMLTableHeaderCellElement>>;
//# sourceMappingURL=Th.d.ts.map