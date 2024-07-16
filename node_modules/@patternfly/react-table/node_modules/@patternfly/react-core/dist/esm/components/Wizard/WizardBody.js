import { __rest } from "tslib";
import React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
import { WizardContext } from './WizardContext';
import { debounce } from '../../helpers/util';
import { getResizeObserver } from '../../helpers/resizeObserver';
export const WizardBody = (_a) => {
    var { children, className, hasNoPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, component = 'div' } = _a, props = __rest(_a, ["children", "className", "hasNoPadding", 'aria-label', 'aria-labelledby', "component"]);
    const [hasScrollbar, setHasScrollbar] = React.useState(false);
    const [previousWidth, setPreviousWidth] = React.useState(undefined);
    const WrapperComponent = component;
    const { activeStep, shouldFocusContent, mainWrapperRef } = React.useContext(WizardContext);
    const defaultAriaLabel = ariaLabel || `${activeStep === null || activeStep === void 0 ? void 0 : activeStep.name} content`;
    React.useEffect(() => {
        const resize = () => {
            if (mainWrapperRef === null || mainWrapperRef === void 0 ? void 0 : mainWrapperRef.current) {
                const { offsetWidth, offsetHeight, scrollHeight } = mainWrapperRef.current;
                if (previousWidth !== offsetWidth) {
                    setPreviousWidth(offsetWidth);
                    setHasScrollbar(offsetHeight < scrollHeight);
                }
            }
        };
        const handleResizeWithDelay = debounce(resize, 250);
        let observer = () => { };
        if (mainWrapperRef === null || mainWrapperRef === void 0 ? void 0 : mainWrapperRef.current) {
            observer = getResizeObserver(mainWrapperRef.current, handleResizeWithDelay);
            const { offsetHeight, scrollHeight } = mainWrapperRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
            setPreviousWidth(mainWrapperRef.current.offsetWidth);
        }
        return () => {
            observer();
        };
    }, [previousWidth]);
    return (React.createElement(WrapperComponent, Object.assign({ ref: mainWrapperRef }, (shouldFocusContent && { tabIndex: -1 }), (component === 'div' && hasScrollbar && { role: 'region' }), (hasScrollbar && { 'aria-label': defaultAriaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 }), { className: css(styles.wizardMain, className) }, props),
        React.createElement("div", { className: css(styles.wizardMainBody, hasNoPadding && styles.modifiers.noPadding) }, children)));
};
WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map