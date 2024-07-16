import * as React from 'react';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import LabelActionIcon from './LabelActionIcon';
const LabelContextMenu = React.forwardRef(({ onContextMenu, className, x, y, paddingX, paddingY, height }, menuRef) => (React.createElement(LabelActionIcon, { ref: menuRef, icon: React.createElement(EllipsisVIcon, null), iconOffsetX: -6, className: className, onClick: onContextMenu, x: x, y: y, height: height, paddingX: paddingX, paddingY: paddingY })));
export default LabelContextMenu;
//# sourceMappingURL=LabelContextMenu.js.map