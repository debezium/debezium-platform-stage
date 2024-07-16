import * as React from 'react';
export interface TopologyViewProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the view */
    className?: string;
    /** Topology inner container (canvas)  */
    children?: React.ReactNode;
    /** Context toolbar to be displayed at the top of the view, should contain components for changing context */
    contextToolbar?: React.ReactNode;
    /** View toolbar to be displayed below the context toolbar, should contain components for changing view contents */
    viewToolbar?: React.ReactNode;
    /** Topology control bar (typically a TopologyControlBar), used to manipulate the graph layout */
    controlBar?: React.ReactNode;
    /** Topology side bar (typically a TopologySideBar), used to display information for elements in graph */
    sideBar?: React.ReactNode;
    /** Flag if side bar is open */
    sideBarOpen?: boolean;
    /** Flag if side bar is resizable, default false */
    sideBarResizable?: boolean;
    /** The starting size of the side bar, in either pixels or percentage, only used if resizable. */
    defaultSideBarSize?: string;
    /** The minimum size of the side bar, in either pixels or percentage. */
    minSideBarSize?: string;
    /** The maximum size of the side bar, in either pixels or percentage. */
    maxSideBarSize?: string;
    /** Callback for side bar resize end. */
    onSideBarResize?: (width: number, id: string) => void;
}
export declare const TopologyView: React.FunctionComponent<TopologyViewProps>;
//# sourceMappingURL=TopologyView.d.ts.map