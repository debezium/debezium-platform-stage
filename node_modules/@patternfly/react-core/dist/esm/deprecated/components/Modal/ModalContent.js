import { __rest } from "tslib";
import * as React from 'react';
import { FocusTrap } from '../../../helpers';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box.mjs';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye.mjs';
import { css } from '@patternfly/react-styles';
import { getOUIAProps } from '../../../helpers';
import { Backdrop } from '../../../components/Backdrop/Backdrop';
import { ModalBoxBody } from './ModalBoxBody';
import { ModalBoxCloseButton } from './ModalBoxCloseButton';
import { ModalBox } from './ModalBox';
import { ModalBoxFooter } from './ModalBoxFooter';
import { ModalBoxDescription } from './ModalBoxDescription';
import { ModalBoxHeader } from './ModalBoxHeader';
import { ModalBoxTitle, isVariantIcon } from './ModalBoxTitle';
export const ModalContent = (_a) => {
    var { children, className = '', isOpen = false, header = null, help = null, description = null, title = '', titleIconVariant = null, titleLabel = '', 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, bodyAriaLabel, bodyAriaRole, showClose = true, footer = null, actions = [], onClose = () => undefined, variant = 'default', position, positionOffset, width, maxWidth, boxId, labelId, descriptorId, disableFocusTrap = false, hasNoBodyWrapper = false, ouiaId, ouiaSafe = true, elementToFocus } = _a, props = __rest(_a, ["children", "className", "isOpen", "header", "help", "description", "title", "titleIconVariant", "titleLabel", 'aria-label', 'aria-describedby', 'aria-labelledby', "bodyAriaLabel", "bodyAriaRole", "showClose", "footer", "actions", "onClose", "variant", "position", "positionOffset", "width", "maxWidth", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe", "elementToFocus"]);
    if (!isOpen) {
        return null;
    }
    const modalBoxHeader = header ? (React.createElement(ModalBoxHeader, { help: help }, header)) : (title && (React.createElement(ModalBoxHeader, { help: help },
        React.createElement(ModalBoxTitle, { title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, id: labelId }),
        description && React.createElement(ModalBoxDescription, { id: descriptorId }, description))));
    const modalBoxFooter = footer ? (React.createElement(ModalBoxFooter, null, footer)) : (actions.length > 0 && React.createElement(ModalBoxFooter, null, actions));
    const defaultModalBodyAriaRole = bodyAriaLabel ? 'region' : undefined;
    const hasNoDescription = !description && !ariaDescribedby;
    const id = hasNoDescription ? descriptorId : undefined;
    const modalBody = hasNoBodyWrapper ? (children) : (React.createElement(ModalBoxBody, Object.assign({ "aria-label": bodyAriaLabel, role: bodyAriaRole || defaultModalBodyAriaRole }, props, { id: id }), children));
    const ariaLabelledbyFormatted = () => {
        if (ariaLabelledby === null) {
            return null;
        }
        const idRefList = [];
        if ((ariaLabel && boxId) !== '') {
            idRefList.push(ariaLabel && boxId);
        }
        if (ariaLabelledby) {
            idRefList.push(ariaLabelledby);
        }
        if (title) {
            idRefList.push(labelId);
        }
        return idRefList.join(' ');
    };
    const modalBox = (React.createElement(ModalBox, Object.assign({ id: boxId, className: css(className, isVariantIcon(titleIconVariant) && modalStyles.modifiers[titleIconVariant]), variant: variant, position: position, positionOffset: positionOffset, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId) }, getOUIAProps(ModalContent.displayName, ouiaId, ouiaSafe), { style: Object.assign(Object.assign({}, (width && { '--pf-v6-c-modal-box--Width': typeof width !== 'number' ? width : `${width}px` })), (maxWidth && {
            '--pf-v6-c-modal-box--MaxWidth': typeof maxWidth !== 'number' ? maxWidth : `${maxWidth}px`
        })) }),
        showClose && React.createElement(ModalBoxCloseButton, { onClose: (event) => onClose(event), ouiaId: ouiaId }),
        modalBoxHeader,
        modalBody,
        modalBoxFooter));
    return (React.createElement(Backdrop, null,
        React.createElement(FocusTrap, { active: !disableFocusTrap, focusTrapOptions: {
                clickOutsideDeactivates: true,
                tabbableOptions: { displayCheck: 'none' },
                // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
                // We want to prevent this in case false is ever passed in.
                initialFocus: elementToFocus || undefined
            }, className: css(bullsEyeStyles.bullseye) }, modalBox)));
};
ModalContent.displayName = 'ModalContent';
//# sourceMappingURL=ModalContent.js.map