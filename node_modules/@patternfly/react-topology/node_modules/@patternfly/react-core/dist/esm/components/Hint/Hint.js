import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint.mjs';
import { css } from '@patternfly/react-styles';
export const Hint = (_a) => {
    var { children, className, actions, hasNoActionsOffset = false } = _a, props = __rest(_a, ["children", "className", "actions", "hasNoActionsOffset"]);
    return (React.createElement("div", Object.assign({ className: css(styles.hint, className) }, props),
        actions && (React.createElement("div", { className: css(styles.hintActions, hasNoActionsOffset && styles.modifiers.noOffset) }, actions)),
        children));
};
Hint.displayName = 'Hint';
//# sourceMappingURL=Hint.js.map