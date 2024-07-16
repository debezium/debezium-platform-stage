import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import { css } from '@patternfly/react-styles';
export const Caption = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("caption", Object.assign({ className: css(styles.tableCaption, className) }, props), children));
};
Caption.displayName = 'Caption';
//# sourceMappingURL=Caption.js.map