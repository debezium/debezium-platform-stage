import * as React from 'react';
import { OUIAProps } from '@patternfly/react-core/dist/esm/helpers/OUIA/ouia';
import { IRow } from './TableTypes';
export interface RowWrapperRow {
    isOpen?: boolean;
    isExpanded?: boolean;
    isEditable?: boolean;
}
export interface RowWrapperProps extends OUIAProps {
    children?: React.ReactNode;
    trRef?: React.Ref<any> | Function;
    className?: string;
    onScroll?: React.UIEventHandler;
    onResize?: React.UIEventHandler;
    row?: IRow;
    rowProps?: {
        rowIndex: number;
        rowKey: string;
    };
    /** Value to set the data-ouia-component-id.*/
    ouiaId?: number | string;
}
declare class RowWrapper extends React.Component<RowWrapperProps> {
    static displayName: string;
    static defaultProps: {
        className: string;
        row: IRow;
        rowProps: any;
    };
    _unmounted: boolean;
    constructor(props: RowWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleScroll: (event: Event) => void;
    handleResize: (event: Event) => void;
    render(): React.JSX.Element;
}
export { RowWrapper };
//# sourceMappingURL=RowWrapper.d.ts.map