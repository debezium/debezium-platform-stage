import * as React from 'react';
/** A container for helper text content. This sub-component should be passed as a child to
 * the main file upload or file upload field component.
 */
export interface FileUploadHelperTextProps extends React.HTMLProps<HTMLDivElement> {
    /** Content to render inside the file upload helper text container. Typically this will be
     * the helper text component.
     */
    children: React.ReactNode;
    /** Additional classes added to the file upload helper text container element. */
    className?: string;
}
export declare const FileUploadHelperText: React.FunctionComponent<FileUploadHelperTextProps>;
//# sourceMappingURL=FileUploadHelperText.d.ts.map