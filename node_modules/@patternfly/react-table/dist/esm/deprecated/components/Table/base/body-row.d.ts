import * as React from 'react';
import { ColumnsType, RowType, RendererType } from '../../../../components/Table/base/types';
export interface BodyRowProps {
    columns: ColumnsType;
    renderers: RendererType;
    onRow?: Function;
    rowIndex: number;
    rowData: RowType;
    rowKey: string;
}
declare class BodyRow extends React.Component<BodyRowProps, {}> {
    static displayName: string;
    static defaultProps: {
        onRow: (...args: any) => {};
    };
    shouldComponentUpdate(nextProps: BodyRowProps): boolean;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export { BodyRow };
//# sourceMappingURL=body-row.d.ts.map