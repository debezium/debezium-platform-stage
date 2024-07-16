import * as React from 'react';
export interface DraggableCellProps {
    id: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    'aria-label'?: string;
}
export declare const DraggableCell: React.FunctionComponent<DraggableCellProps>;
//# sourceMappingURL=DraggableCell.d.ts.map