import { Options as FocusTrapOptions } from 'focus-trap';
import React, { ComponentPropsWithRef } from 'react';
export interface FocusTrapProps extends ComponentPropsWithRef<'div'> {
    active?: boolean;
    paused?: boolean;
    focusTrapOptions?: FocusTrapOptions;
    /** Prevent from scrolling to the previously focused element on deactivation */
    preventScrollOnDeactivate?: boolean;
}
export declare const FocusTrap: React.ForwardRefExoticComponent<Omit<FocusTrapProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FocusTrap.d.ts.map