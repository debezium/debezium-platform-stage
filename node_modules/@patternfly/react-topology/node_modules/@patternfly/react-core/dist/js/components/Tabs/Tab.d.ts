import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface TabProps extends Omit<React.HTMLProps<HTMLAnchorElement | HTMLButtonElement>, 'title' | 'action'>, OUIAProps {
    /** content rendered inside the Tab content area. */
    children?: React.ReactNode;
    /** additional classes added to the Tab */
    className?: string;
    /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
    href?: string;
    /** Content rendered in the tab title. Should be <TabTitleText> and/or <TabTitleIcon> for proper styling. */
    title: React.ReactNode;
    /** uniquely identifies the tab */
    eventKey: number | string;
    /** child id for case in which a TabContent section is defined outside of a Tabs component */
    tabContentId?: string | number;
    /** child reference for case in which a TabContent section is defined outside of a Tabs component */
    tabContentRef?: React.RefObject<any>;
    /** whether to render the tab or not */
    isHidden?: boolean;
    /** Adds disabled styling and disables the button using the disabled html attribute */
    isDisabled?: boolean;
    /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
    isAriaDisabled?: boolean;
    /** Events to prevent when the button is in an aria-disabled state */
    inoperableEvents?: string[];
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Optional Tooltip rendered to a Tab. Should be <Tooltip> with appropriate props for proper rendering. */
    tooltip?: React.ReactElement<any>;
    /** Aria-label for the close button added by passing the onClose property to Tabs. */
    closeButtonAriaLabel?: string;
    /** Flag indicating the close button should be disabled */
    isCloseDisabled?: boolean;
    /** Actions rendered beside the tab content */
    actions?: React.ReactNode;
    /** Value to set the data-ouia-component-id for the tab button.*/
    ouiaId?: number | string;
}
export declare const Tab: React.ForwardRefExoticComponent<Omit<TabProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=Tab.d.ts.map