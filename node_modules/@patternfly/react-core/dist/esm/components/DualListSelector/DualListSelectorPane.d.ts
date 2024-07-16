import * as React from 'react';
/** Acts as the container for a list of options that are either available or chosen,
 * depending on the pane type (available or chosen). A search input and other actions,
 * such as sorting, can also be passed into this sub-component.
 */
export interface DualListSelectorPaneProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    /** Additional classes applied to the dual list selector pane. */
    className?: string;
    /** A dual list selector list or dual list selector tree to be rendered in the pane. */
    children?: React.ReactNode;
    /** Flag indicating if this pane is the chosen pane. */
    isChosen?: boolean;
    /** Status to display above the pane. */
    status?: string;
    /** Title of the pane. */
    title?: React.ReactNode;
    /** A search input placed above the list at the top of the pane, before actions. */
    searchInput?: React.ReactNode;
    /** Actions to place above the pane. */
    actions?: React.ReactNode[];
    /** ID of the pane. */
    id?: string;
    /** Flag indicating whether the component is disabled. */
    isDisabled?: boolean;
    /** Callback for search input. To be used when isSearchable is true. */
    onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Minimum height of the list of options rendered in the pane. **/
    listMinHeight?: string;
}
export declare const DualListSelectorPane: React.FunctionComponent<DualListSelectorPaneProps>;
//# sourceMappingURL=DualListSelectorPane.d.ts.map