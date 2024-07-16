import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import backgroundImage from '@patternfly/react-tokens/dist/esm/c_about_modal_box_BackgroundImage';
import { AboutModalBoxContent } from './AboutModalBoxContent';
import { AboutModalBoxHeader } from './AboutModalBoxHeader';
import { AboutModalBoxBrand } from './AboutModalBoxBrand';
import { AboutModalBoxCloseButton } from './AboutModalBoxCloseButton';
import { AboutModalBox } from './AboutModalBox';
import { Modal, ModalVariant } from '../../deprecated/components/Modal';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
export const AboutModal = (_a) => {
    var { children, className, isOpen = false, onClose = (_e) => undefined, productName, trademark, backgroundImageSrc, brandImageSrc, brandImageAlt, hasNoContentContainer = false, appendTo, closeButtonAriaLabel, 'aria-label': ariaLabel, disableFocusTrap } = _a, props = __rest(_a, ["children", "className", "isOpen", "onClose", "productName", "trademark", "backgroundImageSrc", "brandImageSrc", "brandImageAlt", "hasNoContentContainer", "appendTo", "closeButtonAriaLabel", 'aria-label', "disableFocusTrap"]);
    if (brandImageSrc && !brandImageAlt) {
        // eslint-disable-next-line no-console
        console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified, and should not be an empty string.');
    }
    if (!productName && !ariaLabel) {
        // eslint-disable-next-line no-console
        console.error('AboutModal:', 'Either productName or ariaLabel is required for component to be accessible');
    }
    if (!isOpen) {
        return null;
    }
    return (React.createElement(GenerateId, { prefix: "pf-about-modal-title-" }, (ariaLabelledBy) => (React.createElement(Modal, Object.assign({ isOpen: isOpen, variant: ModalVariant.large }, (productName && { 'aria-labelledby': ariaLabelledBy }), { "aria-label": ariaLabel, onEscapePress: onClose, showClose: false, appendTo: appendTo, disableFocusTrap: disableFocusTrap, hasNoBodyWrapper: true }),
        React.createElement(AboutModalBox, { style: backgroundImageSrc
                ? { [backgroundImage.name]: `url(${backgroundImageSrc})` }
                : {}, className: css(className) },
            React.createElement(AboutModalBoxBrand, { src: brandImageSrc, alt: brandImageAlt }),
            React.createElement(AboutModalBoxCloseButton, { "aria-label": closeButtonAriaLabel, onClose: onClose }),
            productName && React.createElement(AboutModalBoxHeader, { id: ariaLabelledBy, productName: productName }),
            React.createElement(AboutModalBoxContent, Object.assign({ trademark: trademark, hasNoContentContainer: hasNoContentContainer }, props), children))))));
};
AboutModal.displayName = 'AboutModal';
//# sourceMappingURL=AboutModal.js.map