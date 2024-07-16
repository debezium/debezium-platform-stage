import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box.mjs';
export const ModalFooter = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("footer", Object.assign({}, props, { className: css(styles.modalBoxFooter, className) }), children));
};
ModalFooter.displayName = 'ModalFooter';
//# sourceMappingURL=ModalFooter.js.map