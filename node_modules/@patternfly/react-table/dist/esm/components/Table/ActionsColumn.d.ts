import * as React from 'react';
import { IAction, IExtraData, IRowData } from './TableTypes';
export interface CustomActionsToggleProps {
    onToggle: (event: React.MouseEvent | React.KeyboardEvent) => void;
    isOpen: boolean;
    isDisabled: boolean;
    toggleRef: React.Ref<any>;
}
export interface ActionsColumnProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
    /** Actions to be rendered within or without the action dropdown */
    items: IAction[];
    /** Indicates whether the actions dropdown is disabled */
    isDisabled?: boolean;
    /** Data of the row the action dropdown is located */
    rowData?: IRowData;
    /** Extra data of a row */
    extraData?: IExtraData;
    /** Custom actions toggle for the actions dropdown */
    actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
    /** Additional properties for the actions dropdown popper */
    popperProps?: any;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Ref to forward to the first item in the popup menu */
    firstActionItemRef?: React.Ref<HTMLButtonElement>;
    /** Flag indicating that the dropdown's onOpenChange callback should not be called. */
    isOnOpenChangeDisabled?: boolean;
}
export declare const ActionsColumn: React.ForwardRefExoticComponent<Omit<ActionsColumnProps, "ref"> & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=ActionsColumn.d.ts.map