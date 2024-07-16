import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box.mjs';
import { ModalBoxDescription } from './ModalBoxDescription';
import { ModalBoxTitle } from './ModalBoxTitle';
export const ModalHeader = (_a) => {
    var { children, className, descriptorId, description, labelId, title, titleIconVariant, titleScreenReaderText, help } = _a, props = __rest(_a, ["children", "className", "descriptorId", "description", "labelId", "title", "titleIconVariant", "titleScreenReaderText", "help"]);
    const headerContent = children ? (children) : (React.createElement(React.Fragment, null,
        React.createElement(ModalBoxTitle, { title: title, titleIconVariant: titleIconVariant, titleScreenReaderText: titleScreenReaderText, id: labelId }),
        description && React.createElement(ModalBoxDescription, { id: descriptorId }, description)));
    return (React.createElement("header", Object.assign({ className: css(styles.modalBoxHeader, help && styles.modifiers.help, className) }, props),
        help && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: css(styles.modalBoxHeaderMain) }, headerContent),
            React.createElement("div", { className: `${styles.modalBoxHeader}-help` }, help))),
        !help && headerContent));
};
ModalHeader.displayName = 'ModalHeader';
//# sourceMappingURL=ModalHeader.js.map