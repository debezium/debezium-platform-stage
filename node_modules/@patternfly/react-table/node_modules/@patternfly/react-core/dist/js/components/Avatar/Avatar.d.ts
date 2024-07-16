import * as React from 'react';
export interface AvatarProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /** Additional classes added to the avatar. */
    className?: string;
    /** Attribute that specifies the URL of the image for the avatar. */
    src?: string;
    /** Attribute that specifies the alternate text of the image for the avatar. */
    alt: string;
    /** Flag to indicate the avatar should have a border. */
    isBordered?: boolean;
    /** Size variant of avatar. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const Avatar: React.FunctionComponent<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map