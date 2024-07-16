import * as React from 'react';
import PopperJS, { PopperOptions } from 'popper.js';
import Portal from './Portal';
interface PopperJSReference {
    getBoundingClientRect: PopperJS['reference']['getBoundingClientRect'];
    clientWidth: number;
    clientHeight: number;
}
interface ClientRectProp {
    x: number;
    y: number;
    width?: number;
    height?: number;
}
declare type Reference = Element | PopperJSReference | ClientRectProp;
interface PopperProps {
    children?: React.ReactNode;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    container?: React.ComponentProps<typeof Portal>['container'];
    className?: string;
    open?: boolean;
    onRequestClose?: (e?: Event) => void;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    popperOptions?: PopperOptions;
    popperRef?: React.Ref<PopperJS>;
    reference: Reference | (() => Reference);
    zIndex?: number;
    returnFocus?: boolean;
}
declare const Popper: React.FunctionComponent<PopperProps>;
export default Popper;
//# sourceMappingURL=Popper.d.ts.map