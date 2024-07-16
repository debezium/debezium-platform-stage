import * as React from 'react';
import { ToolbarItemProps } from './ToolbarItem';
import { ToolbarContext } from './ToolbarUtils';
import { PickOptional } from '../../helpers/typeUtils';
export interface ToolbarLabelGroup {
    /** A unique key to identify this label group category */
    key: string;
    /** The category name to display for the label group */
    name: string;
}
export interface ToolbarLabel {
    /** A unique key to identify this label */
    key: string;
    /** The ReactNode to display in the label */
    node: React.ReactNode;
}
export interface ToolbarFilterProps extends ToolbarItemProps {
    /** Flag indicating when toolbar toggle group is expanded for non-managed toolbar toggle groups. */
    isExpanded?: boolean;
    /** An array of strings to be displayed as labels in the expandable content */
    labels?: (string | ToolbarLabel)[];
    /** Callback passed by consumer used to close the entire label group */
    deleteLabelGroup?: (category: string | ToolbarLabelGroup) => void;
    /** Callback passed by consumer used to delete a label from the labels[] */
    deleteLabel?: (category: string | ToolbarLabelGroup, label: ToolbarLabel | string) => void;
    /** Customizable "Show Less" text string for the label group */
    labelGroupExpandedText?: string;
    /** Customizeable template string for the label group. Use variable "${remaining}" for the overflow label count. */
    labelGroupCollapsedText?: string;
    /** Content to be rendered inside the data toolbar item associated with the label group */
    children: React.ReactNode;
    /** Unique category name to be used as a label for the label group */
    categoryName: string | ToolbarLabelGroup;
    /** Flag to show the toolbar item */
    showToolbarItem?: boolean;
    /** Reference to a label container created with a custom expandable content group, for non-managed multiple toolbar toggle groups. */
    expandableLabelContainerRef?: React.RefObject<HTMLDivElement>;
}
interface ToolbarFilterState {
    isMounted: boolean;
}
declare class ToolbarFilter extends React.Component<ToolbarFilterProps, ToolbarFilterState> {
    static displayName: string;
    static contextType: React.Context<import("./ToolbarUtils").ToolbarContextProps>;
    context: React.ContextType<typeof ToolbarContext>;
    static defaultProps: PickOptional<ToolbarFilterProps>;
    constructor(props: ToolbarFilterProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}
export { ToolbarFilter };
//# sourceMappingURL=ToolbarFilter.d.ts.map