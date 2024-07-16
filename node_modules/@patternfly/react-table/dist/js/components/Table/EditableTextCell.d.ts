import * as React from 'react';
import { EditableTextCellProps } from './base/types';
export interface IEditableTextCell extends React.HTMLProps<HTMLDivElement> {
    /** The current value of the text input */
    value: string;
    /** Row index of this text cell */
    rowIndex: number;
    /** Cell index of this text cell */
    cellIndex: number;
    /** Props to build the input */
    props: EditableTextCellProps;
    /** Event handler which fires when user changes the text in this cell */
    handleTextInputChange: (newValue: string, event: React.FormEvent<HTMLInputElement>, rowIndex: number, cellIndex: number) => void;
    /** accessible label of the text input */
    inputAriaLabel: string;
    /** flag indicating if the text input is disabled */
    isDisabled?: boolean;
}
export declare const EditableTextCell: React.FunctionComponent<IEditableTextCell>;
//# sourceMappingURL=EditableTextCell.d.ts.map