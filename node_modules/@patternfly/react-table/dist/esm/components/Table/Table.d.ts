import * as React from 'react';
import { IVisibility } from './utils/decorators/classNames';
import { OUIAProps } from '@patternfly/react-core';
import { TableVariant } from './TableTypes';
export interface BaseCellProps {
    /** Content rendered inside the cell */
    children?: React.ReactNode;
    /** Additional classes added to the cell  */
    className?: string;
    /** Element to render */
    component?: React.ReactNode;
    /** Modifies cell to center its contents. */
    textCenter?: boolean;
    /** Style modifier to apply */
    modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
    /** Width percentage modifier */
    width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;
    /** Visibility breakpoint modifiers */
    visibility?: (keyof IVisibility)[];
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export interface TableProps extends React.HTMLProps<HTMLTableElement>, OUIAProps {
    /** Adds an accessible name for the Table */
    'aria-label'?: string;
    /** Content rendered inside the Table */
    children?: React.ReactNode;
    /** Additional classes added to the Table  */
    className?: string;
    /**
     * Style variant for the Table
     * compact: Reduces spacing and makes the table more compact
     */
    variant?: TableVariant | 'compact';
    /** Render borders */
    borders?: boolean;
    /** Specifies the grid breakpoints  */
    gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
    /** A valid WAI-ARIA role to be applied to the table element */
    role?: string;
    /** If set to true, the table header sticks to the top of its container */
    isStickyHeader?: boolean;
    /** @hide Forwarded ref */
    innerRef?: React.RefObject<any>;
    /** Flag indicating table is a tree table */
    isTreeTable?: boolean;
    /** Flag indicating this table is nested within another table */
    isNested?: boolean;
    /** Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components. */
    isStriped?: boolean;
    /** Flag indicating this table contains expandable rows to maintain proper striping */
    isExpandable?: boolean;
    /** Flag indicating this table's rows will not have the inset typically reserved for expanding/collapsing rows in a tree table. Intended for use on tree tables with no visible rows with children. */
    hasNoInset?: boolean;
    /** Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584 */
    nestedHeaderColumnSpans?: number[];
    /** Visible text to add alongside the hidden a11y caption for tables with selectable rows. */
    selectableRowCaptionText?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface TableContextProps {
    registerSelectableRow?: () => void;
}
export declare const TableContext: React.Context<TableContextProps>;
export declare const Table: React.ForwardRefExoticComponent<Omit<TableProps, "ref"> & React.RefAttributes<HTMLTableElement>>;
export {};
//# sourceMappingURL=Table.d.ts.map