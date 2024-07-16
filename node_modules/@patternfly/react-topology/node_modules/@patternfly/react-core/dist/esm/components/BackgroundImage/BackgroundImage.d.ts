import React from 'react';
export interface BackgroundImageProps extends React.HTMLProps<HTMLDivElement> {
    /** The URL or file path of the image for the background */
    src: string;
    /** Additional classes added to the background image. */
    className?: string;
}
export declare const BackgroundImage: React.FunctionComponent<BackgroundImageProps>;
//# sourceMappingURL=BackgroundImage.d.ts.map