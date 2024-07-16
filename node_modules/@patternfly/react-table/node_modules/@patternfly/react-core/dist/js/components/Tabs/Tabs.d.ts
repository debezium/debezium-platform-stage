/// <reference types="node" />
import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { TabProps } from './Tab';
import { OUIAProps } from '../../helpers';
export declare enum TabsComponent {
    div = "div",
    nav = "nav"
}
export interface HorizontalOverflowObject {
    /** Flag which shows the count of overflowing tabs when enabled */
    showTabCount?: boolean;
    /** The text which displays when an overflowing tab isn't selected */
    defaultTitleText?: string;
    /** The aria label applied to the button which toggles the tab overflow menu */
    toggleAriaLabel?: string;
}
type TabElement = React.ReactElement<TabProps, React.JSXElementConstructor<TabProps>>;
type TabsChild = TabElement | boolean | null | undefined;
export interface TabsProps extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'>, OUIAProps {
    /** Content rendered inside the tabs component. Only `Tab` components or expressions resulting in a falsy value are allowed here. */
    children: TabsChild | TabsChild[];
    /** Additional classes added to the tabs */
    className?: string;
    /** Tabs background color variant */
    variant?: 'default' | 'secondary';
    /** The index of the active tab */
    activeKey?: number | string;
    /** The index of the default active tab. Set this for uncontrolled Tabs */
    defaultActiveKey?: number | string;
    /** Callback to handle tab selection */
    onSelect?: (event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void;
    /** Callback to handle tab closing and adds a basic close button to all tabs. This is overridden by the tab actions property. */
    onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void;
    /** Callback for the add button. Passing this property inserts the add button */
    onAdd?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Aria-label for the add button */
    addButtonAriaLabel?: string;
    /** Uniquely identifies the tabs */
    id?: string;
    /** Enables the filled tab list layout */
    isFilled?: boolean;
    /** Enables subtab tab styling */
    isSubtab?: boolean;
    /** Enables box styling to the tab component */
    isBox?: boolean;
    /** Enables vertical tab styling */
    isVertical?: boolean;
    /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
    hasNoBorderBottom?: boolean;
    /** @deprecated Please use backScrollAriaLabel. Aria-label for the left scroll button */
    leftScrollAriaLabel?: string;
    /** @deprecated Please use forwardScrollAriaLabel. Aria-label for the right scroll button */
    rightScrollAriaLabel?: string;
    /** Aria-label for the back scroll button */
    backScrollAriaLabel?: string;
    /** Aria-label for the forward scroll button */
    forwardScrollAriaLabel?: string;
    /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
    component?: 'div' | 'nav';
    /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
    'aria-label'?: string;
    /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
    mountOnEnter?: boolean;
    /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
    unmountOnExit?: boolean;
    /** Flag indicates that the tabs should use page insets. */
    usePageInsets?: boolean;
    /** Insets at various breakpoints. */
    inset?: {
        default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    };
    /** Enable expandable vertical tabs at various breakpoints. (isVertical should be set to true for this to work) */
    expandable?: {
        default?: 'expandable' | 'nonExpandable';
        sm?: 'expandable' | 'nonExpandable';
        md?: 'expandable' | 'nonExpandable';
        lg?: 'expandable' | 'nonExpandable';
        xl?: 'expandable' | 'nonExpandable';
        '2xl'?: 'expandable' | 'nonExpandable';
    };
    /** Flag to indicate if the vertical tabs are expanded */
    isExpanded?: boolean;
    /** Flag indicating the default expanded state for uncontrolled expand/collapse of */
    defaultIsExpanded?: boolean;
    /** Text that appears in the expandable toggle */
    toggleText?: string;
    /** Aria-label for the expandable toggle */
    toggleAriaLabel?: string;
    /** Callback function to toggle the expandable tabs. */
    onToggle?: (event: React.MouseEvent, isExpanded: boolean) => void;
    /** Flag which places overflowing tabs into a menu triggered by the last tab. Additionally an object can be passed with custom settings for the overflow tab. */
    isOverflowHorizontal?: boolean | HorizontalOverflowObject;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface TabsState {
    /** Used to signal if the scroll buttons should be used  */
    enableScrollButtons: boolean;
    /** Used to control if the scroll buttons should be shown to the user via the pf-m-scrollable class */
    showScrollButtons: boolean;
    /** Used to control if the scroll buttons should be rendered. Rendering must occur before the scroll buttons are
     * shown and rendering must be stopped after they stop being shown to preserve CSS transitions.
     */
    renderScrollButtons: boolean;
    disableBackScrollButton: boolean;
    disableForwardScrollButton: boolean;
    shownKeys: (string | number)[];
    uncontrolledActiveKey: number | string;
    uncontrolledIsExpandedLocal: boolean;
    ouiaStateId: string;
    overflowingTabCount: number;
}
declare class Tabs extends React.Component<TabsProps, TabsState> {
    static displayName: string;
    tabList: React.RefObject<HTMLUListElement>;
    leftScrollButtonRef: React.RefObject<HTMLButtonElement>;
    private direction;
    constructor(props: TabsProps);
    scrollTimeout: NodeJS.Timeout;
    static defaultProps: PickOptional<TabsProps>;
    handleTabClick(event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string, tabContentRef: React.RefObject<any>): void;
    countOverflowingElements: (container: HTMLUListElement) => number;
    handleScrollButtons: () => void;
    scrollBack: () => void;
    scrollForward: () => void;
    hideScrollButtons: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TabsProps, prevState: TabsState): void;
    static getDerivedStateFromProps(nextProps: TabsProps, prevState: TabsState): {
        uncontrolledActiveKey: string | number;
        shownKeys: (string | number)[];
    };
    render(): React.JSX.Element;
}
export { Tabs };
//# sourceMappingURL=Tabs.d.ts.map