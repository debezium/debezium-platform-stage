import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state.mjs';
import { Spinner } from '../Spinner';
const isSpinner = (icon) => icon.type === Spinner;
export const EmptyStateIcon = (_a) => {
    var { className, icon: IconComponent } = _a, props = __rest(_a, ["className", "icon"]);
    const iconIsSpinner = isSpinner(React.createElement(IconComponent, null));
    return (React.createElement("div", { className: css(styles.emptyStateIcon) },
        React.createElement(IconComponent, Object.assign({ className: className, "aria-hidden": !iconIsSpinner }, props))));
};
EmptyStateIcon.displayName = 'EmptyStateIcon';
//# sourceMappingURL=EmptyStateIcon.js.map