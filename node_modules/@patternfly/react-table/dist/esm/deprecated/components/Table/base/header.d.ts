/**
 * header.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { RowsType, ColumnsType, RenderersTypes } from '../../../../components/Table/base/types';
export interface HeaderProps {
    headerRows?: RowsType[] | ColumnsType;
    children?: React.ReactNode;
    columns?: ColumnsType;
    renderers?: RenderersTypes['renderers'];
    onRow?: Function;
    className?: string;
}
export declare const Header: (props: HeaderProps) => React.JSX.Element;
//# sourceMappingURL=header.d.ts.map