import * as React from 'react';
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse, OnToggleRowDetails } from '../../TableTypes';
export declare const treeRow: (onCollapse: OnTreeRowCollapse, onCheckChange?: OnCheckChange, onToggleRowDetails?: OnToggleRowDetails) => (value: IFormatterValueType, { rowIndex, rowData }: IExtra) => {
    component: string;
    className: "pf-v6-c-table__tree-view-title-cell";
    children: React.JSX.Element;
};
//# sourceMappingURL=treeRow.d.ts.map