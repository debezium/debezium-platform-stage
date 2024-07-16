import * as React from 'react';
import { RowKeyType } from '../../../components/Table/base/types';
import { IRow, IExtraRowData } from '../../../components';
export interface IComputedData {
    isInput: boolean;
    isButton: boolean;
}
export type OnRowClick = (event: React.KeyboardEvent | React.MouseEvent, row: IRow, rowProps: IExtraRowData, computedData: IComputedData) => void;
export interface TableBodyProps {
    /** Additional classes added to the TableBody  */
    className?: string;
    /** @hide This prop should not be set manually  */
    children?: React.ReactNode;
    /** @hide This prop should not be set manually  */
    headerData?: IRow[];
    /** @hide This prop should not be set manually  */
    rows?: IRow[];
    /** @hide This prop should not be set manually  */
    rowKey?: RowKeyType;
    /** A click handler for the row  */
    onRowClick?: OnRowClick;
    /** @hide This prop should not be set manually  */
    onRow?: Function;
    /** Flag indicating the <tbody> contains oddly striped rows. */
    isOddStriped?: boolean;
    /** Flag indicating the <tbody> contains evenly striped rows. */
    isEvenStriped?: boolean;
}
export declare const TableBody: ({ className, children, rowKey, onRow, onRowClick, ...props }: TableBodyProps) => React.JSX.Element;
//# sourceMappingURL=Body.d.ts.map