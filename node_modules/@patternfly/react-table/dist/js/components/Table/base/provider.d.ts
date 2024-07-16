/**
 * provider.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { RenderersTypes, ColumnsType } from './types';
export interface ProviderProps extends RenderersTypes {
    children?: React.ReactNode;
    role?: string;
    className?: string;
    variant?: 'compact';
    borders?: boolean;
}
export declare const ProviderContext: React.Context<{
    columns: ColumnsType;
    renderers: {
        table?: any;
        header?: import("./types").RendererType;
        body?: import("./types").RendererType;
    };
}>;
declare class Provider extends React.Component<ProviderProps, {}> {
    static displayName: string;
    static defaultProps: {
        renderers: {
            table: React.ForwardRefExoticComponent<Omit<import("..").TableProps, "ref"> & React.RefAttributes<HTMLTableElement>>;
            header: {
                wrapper: React.ForwardRefExoticComponent<Omit<import("..").TheadProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
                row: React.ForwardRefExoticComponent<Omit<import("..").TrProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
                cell: React.ForwardRefExoticComponent<Omit<import("..").ThProps, "ref"> & React.RefAttributes<HTMLTableHeaderCellElement>>;
            };
            body: {
                wrapper: React.ForwardRefExoticComponent<Omit<import("..").TbodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
                row: React.ForwardRefExoticComponent<Omit<import("..").TrProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
                cell: React.ForwardRefExoticComponent<Omit<import("..").TdProps, "ref"> & React.RefAttributes<HTMLTableDataCellElement>>;
            };
        };
    };
    render(): React.JSX.Element;
}
export { Provider };
//# sourceMappingURL=provider.d.ts.map