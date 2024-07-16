import * as React from 'react';
/** Renders content in the header of the modal */
export interface ModalHeaderProps {
    /** Custom content rendered inside the modal header. If children are supplied then the tile, tileIconVariant and titleScreenReaderText props are ignored. */
    children?: React.ReactNode;
    /** Additional classes added to the modal header. */
    className?: string;
    /** Description of the modal. */
    description?: React.ReactNode;
    /** Id of the modal description. */
    descriptorId?: string;
    /** Optional help section for the modal header. */
    help?: React.ReactNode;
    /** Id of the modal title. */
    labelId?: string;
    /** Content rendered inside the modal title. */
    title?: React.ReactNode;
    /** Optional alert icon (or other) to show before the title. When the predefined alert types
     * are used the default styling will be automatically applied. */
    titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'custom' | React.ComponentType<any>;
    /** Optional title label text for screen readers. */
    titleScreenReaderText?: string;
}
export declare const ModalHeader: React.FunctionComponent<ModalHeaderProps>;
//# sourceMappingURL=ModalHeader.d.ts.map