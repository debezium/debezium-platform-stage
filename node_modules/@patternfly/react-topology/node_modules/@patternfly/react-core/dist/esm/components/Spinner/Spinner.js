import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Spinner/spinner.mjs';
import { css } from '@patternfly/react-styles';
import cssDiameter from '@patternfly/react-tokens/dist/esm/c_spinner_diameter';
export var spinnerSize;
(function (spinnerSize) {
    spinnerSize["sm"] = "sm";
    spinnerSize["md"] = "md";
    spinnerSize["lg"] = "lg";
    spinnerSize["xl"] = "xl";
})(spinnerSize || (spinnerSize = {}));
export const Spinner = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', size = 'xl', 'aria-valuetext': ariaValueText = 'Loading...', diameter, isInline = false, 'aria-label': ariaLabel, 'aria-labelledBy': ariaLabelledBy } = _a, props = __rest(_a, ["className", "size", 'aria-valuetext', "diameter", "isInline", 'aria-label', 'aria-labelledBy']);
    return (React.createElement("svg", Object.assign({ className: css(styles.spinner, isInline ? styles.modifiers.inline : styles.modifiers[size], className), role: "progressbar", "aria-valuetext": ariaValueText, viewBox: "0 0 100 100" }, (diameter && { style: { [cssDiameter.name]: diameter } }), (ariaLabel && { 'aria-label': ariaLabel }), (ariaLabelledBy && { 'aria-labelledBy': ariaLabelledBy }), (!ariaLabel && !ariaLabelledBy && { 'aria-label': 'Contents' }), props),
        React.createElement("circle", { className: styles.spinnerPath, cx: "50", cy: "50", r: "45", fill: "none" })));
};
Spinner.displayName = 'Spinner';
//# sourceMappingURL=Spinner.js.map