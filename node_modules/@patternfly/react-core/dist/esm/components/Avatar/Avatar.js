import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Avatar/avatar.mjs';
import { css } from '@patternfly/react-styles';
export const Avatar = (_a) => {
    var { className, src = '', alt, isBordered, size } = _a, props = __rest(_a, ["className", "src", "alt", "isBordered", "size"]);
    return (React.createElement("img", Object.assign({ src: src, alt: alt, className: css(styles.avatar, styles.modifiers[size], isBordered && styles.modifiers.bordered, className) }, props)));
};
Avatar.displayName = 'Avatar';
//# sourceMappingURL=Avatar.js.map