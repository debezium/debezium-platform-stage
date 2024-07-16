import * as React from 'react';
export interface CollapseColumnProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    onToggle?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isOpen?: boolean;
    'aria-label'?: string;
}
export declare const CollapseColumn: React.FunctionComponent<CollapseColumnProps>;
//# sourceMappingURL=CollapseColumn.d.ts.map