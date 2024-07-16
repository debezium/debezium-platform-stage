/**
 * body.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { RowsType, RowKeyType, RenderersTypes, ColumnsType } from '../../../../components/Table/base/types';
export interface BodyProps {
    onRow?: Function;
    rows: RowsType;
    rowKey?: RowKeyType;
    columns?: ColumnsType;
    renderers?: RenderersTypes['renderers'];
    mappedRows?: any;
    className?: string;
}
export declare const Body: (props: BodyProps) => React.JSX.Element;
//# sourceMappingURL=body.d.ts.map