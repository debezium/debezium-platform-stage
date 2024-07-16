import * as React from 'react';
export interface NotificationDrawerProps extends React.HTMLProps<HTMLDivElement> {
    /**  Content rendered inside the notification drawer */
    children?: React.ReactNode;
    /**  Additional classes added to the notification drawer */
    className?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export declare const NotificationDrawer: React.ForwardRefExoticComponent<Omit<NotificationDrawerProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=NotificationDrawer.d.ts.map