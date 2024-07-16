import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box.mjs';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const ModalBoxCloseButton = (_a) => {
    var { className, onClose, 'aria-label': ariaLabel = 'Close', ouiaId } = _a, props = __rest(_a, ["className", "onClose", 'aria-label', "ouiaId"]);
    return (React.createElement("div", { className: css(styles.modalBoxClose, className) },
        React.createElement(Button, Object.assign({ variant: "plain", onClick: (event) => onClose(event), "aria-label": ariaLabel }, (ouiaId && { ouiaId: `${ouiaId}-${ModalBoxCloseButton.displayName}` }), props, { icon: React.createElement(TimesIcon, null) }))));
};
ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
//# sourceMappingURL=ModalBoxCloseButton.js.map