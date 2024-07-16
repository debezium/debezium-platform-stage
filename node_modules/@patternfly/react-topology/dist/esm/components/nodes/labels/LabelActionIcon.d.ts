import * as React from 'react';
interface LabelActionIconProps {
    className?: string;
    icon: React.ReactElement;
    onClick: (e: React.MouseEvent) => void;
    iconOffsetX?: number;
    iconOffsetY?: number;
    x: number;
    y: number;
    height: number;
    paddingX: number;
    paddingY: number;
}
declare const LabelActionIcon: React.ForwardRefExoticComponent<LabelActionIconProps & React.RefAttributes<SVGRectElement>>;
export default LabelActionIcon;
//# sourceMappingURL=LabelActionIcon.d.ts.map