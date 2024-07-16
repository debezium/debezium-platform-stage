/// <reference types="react" />
import { ICell, IRow, OnSelect, OnCollapse } from '../TableTypes';
export interface ISelectTransform {
    onSelect: OnSelect;
    canSelectAll: boolean;
}
export interface ICollapseTranform {
    onCollapse: OnCollapse;
    canCollapseAll: boolean;
    firstUserColumnIndex: number;
}
/**
 * Function to join parent and their children so they can be rendered in tbody.
 *
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
export declare const mapOpenedRows: (rows: IRow[], children: any) => IRow[];
/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 *
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @returns {*} expected object for react tabular table.
 */
export declare const calculateColumns: (headerRows: (ICell | string)[], extra: any) => {
    property: string;
    extraParams: any;
    data: any;
    header: {
        label: string | ICell;
        transforms: (import("../TableTypes").ITransform | import("../base/types").transformType)[];
        formatters: (import("../TableTypes").IFormatter | import("../base/types").formatterType)[];
        props?: object;
        property?: string;
        info?: import("../base/types").ThInfoType;
    };
    cell: {
        transforms: import("../TableTypes").ITransform[];
        formatters: import("../TableTypes").IFormatter[];
        title?: import("react").ReactNode;
        cellTransforms?: import("../TableTypes").ITransform[];
        columnTransforms?: import("../TableTypes").ITransform[];
        cellFormatters?: import("../TableTypes").IFormatter[];
        header?: import("../base/types").HeaderType;
        props?: any;
        data?: any;
        cell?: any;
        dataLabel?: string;
    };
    props: any;
}[];
//# sourceMappingURL=headerUtils.d.ts.map