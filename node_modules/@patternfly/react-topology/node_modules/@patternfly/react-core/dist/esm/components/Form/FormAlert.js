import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Form/form.mjs';
export const FormAlert = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (
    // There are currently no associated styles with the pf-v6-c-form_alert class.
    // Therefore, it does not exist in react-styles
    React.createElement("div", Object.assign({}, props, { className: css(`${styles.form}__alert`, className) }), children));
};
FormAlert.displayName = 'FormAlert';
//# sourceMappingURL=FormAlert.js.map