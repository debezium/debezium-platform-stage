import * as React from 'react';
export declare const statusIcons: {
    success: React.ComponentClass<SVGIconProps, any>;
    error: React.ComponentClass<SVGIconProps, any>;
    warning: React.ComponentClass<SVGIconProps, any>;
};
export interface FormControlIconProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional class names added to the text input icon wrapper. */
    className?: string;
    /** A custom icon to render instead of a status icon. */
    customIcon?: React.ReactNode;
    /** The status icon to render. */
    status?: 'success' | 'error' | 'warning';
}
export declare const FormControlIcon: ({ status, customIcon, className, ...props }: FormControlIconProps) => React.JSX.Element;
//# sourceMappingURL=FormControlIcon.d.ts.map