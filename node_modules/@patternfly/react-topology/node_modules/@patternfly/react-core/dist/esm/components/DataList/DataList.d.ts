import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
export declare enum DataListWrapModifier {
    nowrap = "nowrap",
    truncate = "truncate",
    breakWord = "breakWord"
}
export interface DataListProps extends Omit<React.HTMLProps<HTMLUListElement>, 'ref'> {
    /** Content rendered inside the DataList list */
    children?: React.ReactNode;
    /** Additional classes added to the DataList list */
    className?: string;
    /** Adds accessible text to the DataList list */
    'aria-label': string;
    /** Optional callback to make DataList selectable, fired when DataListItem selected */
    onSelectDataListItem?: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
    /** Id of DataList item currently selected */
    selectedDataListItemId?: string;
    /** Flag indicating if DataList should have compact styling */
    isCompact?: boolean;
    /** Specifies the grid breakpoints  */
    gridBreakpoint?: 'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Determines which wrapping modifier to apply to the DataList */
    wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
    /** Object that causes the data list to render hidden inputs which improve selectable item a11y */
    onSelectableRowChange?: (event: React.FormEvent<HTMLInputElement>, id: string) => void;
}
interface DataListContextProps {
    isSelectable: boolean;
    selectedDataListItemId: string;
    updateSelectedDataListItem: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
    onSelectableRowChange?: (event: React.FormEvent<HTMLInputElement>, id: string) => void;
}
export declare const DataListContext: React.Context<Partial<DataListContextProps>>;
declare class DataList extends React.Component<DataListProps> {
    static displayName: string;
    static defaultProps: PickOptional<DataListProps>;
    ref: React.RefObject<HTMLUListElement>;
    constructor(props: DataListProps);
    getIndex: (id: string) => number;
    render(): React.JSX.Element;
}
export { DataList };
//# sourceMappingURL=DataList.d.ts.map