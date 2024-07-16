import * as React from 'react';
import { BadgeLocation } from '../../../types';
interface LabelBadgeProps {
    className?: string;
    x: number;
    y: number;
    badge?: React.ReactNode;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeBorderColor?: string;
    badgeClassName?: string;
    badgeLocation?: BadgeLocation;
}
declare const TaskBadge: React.ForwardRefExoticComponent<LabelBadgeProps & React.RefAttributes<SVGRectElement>>;
export default TaskBadge;
//# sourceMappingURL=TaskBadge.d.ts.map