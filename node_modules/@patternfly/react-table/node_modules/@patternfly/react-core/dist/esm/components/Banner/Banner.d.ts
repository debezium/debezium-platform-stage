import * as React from 'react';
export type BannerColor = 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple';
export type BannerStatus = 'success' | 'warning' | 'danger' | 'info' | 'custom';
export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the banner. */
    children?: React.ReactNode;
    /** Additional classes added to the banner. */
    className?: string;
    /** If set to true, the banner sticks to the top of its container */
    isSticky?: boolean;
    /** Text announced by screen readers to indicate the type of banner. This prop should only
     * be passed in when the banner conveys status/severity.
     */
    screenReaderText?: string;
    /** Color options for the banner, will be overwritten by any applied using the status prop. */
    color?: BannerColor;
    /** Status style options for the banner, will overwrite any color applied using the color prop. */
    status?: BannerStatus;
}
interface StatusBanner extends BannerProps {
    color?: never;
    status?: BannerStatus;
}
interface NonStatusBanner extends BannerProps {
    color?: BannerColor;
    status?: never;
}
export declare const Banner: React.FunctionComponent<StatusBanner | NonStatusBanner>;
export {};
//# sourceMappingURL=Banner.d.ts.map