import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
import { WizardDrawerWrapper } from './WizardDrawerWrapper';
import { Drawer, DrawerContent } from '../../../components/Drawer';
import { debounce } from '../../../helpers/util';
import { getResizeObserver } from '../../../helpers/resizeObserver';
export const WizardBody = ({ children, hasNoBodyPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, mainComponent = 'div', hasDrawer, isDrawerExpanded, onExpandDrawer, activeStep }) => {
    const MainComponent = mainComponent;
    const [hasScrollbar, setHasScrollbar] = React.useState(false);
    const [previousWidth, setPreviousWidth] = React.useState(undefined);
    const wizardBodyRef = React.useRef(null);
    React.useEffect(() => {
        const resize = () => {
            if (wizardBodyRef === null || wizardBodyRef === void 0 ? void 0 : wizardBodyRef.current) {
                const { offsetWidth, offsetHeight, scrollHeight } = wizardBodyRef.current;
                if (previousWidth !== offsetWidth) {
                    setPreviousWidth(offsetWidth);
                    setHasScrollbar(offsetHeight < scrollHeight);
                }
            }
        };
        const handleResizeWithDelay = debounce(resize, 250);
        let observer = () => { };
        if (wizardBodyRef === null || wizardBodyRef === void 0 ? void 0 : wizardBodyRef.current) {
            observer = getResizeObserver(wizardBodyRef.current, handleResizeWithDelay);
            const { offsetHeight, scrollHeight } = wizardBodyRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
            setPreviousWidth(wizardBodyRef.current.offsetWidth);
        }
        return () => {
            observer();
        };
    }, []);
    return (React.createElement(MainComponent, Object.assign({}, (mainComponent === 'div' && hasScrollbar && { role: 'region' }), (hasScrollbar && { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 }), { ref: wizardBodyRef, className: css(styles.wizardMain) }),
        React.createElement(WizardDrawerWrapper, { hasDrawer: hasDrawer && activeStep.drawerPanelContent, wrapper: (children) => (React.createElement(Drawer, { isInline: true, isExpanded: isDrawerExpanded, onExpand: onExpandDrawer },
                React.createElement(DrawerContent, { panelContent: activeStep.drawerPanelContent }, children))) },
            React.createElement("div", { className: css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding) }, children))));
};
WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map