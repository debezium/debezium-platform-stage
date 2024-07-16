import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload.mjs';
import { css } from '@patternfly/react-styles';
import { ExpandableSection } from '../ExpandableSection';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
export const MultipleFileUploadStatus = (_a) => {
    var { children, className, statusToggleText, statusToggleIcon, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["children", "className", "statusToggleText", "statusToggleIcon", 'aria-label']);
    const [icon, setIcon] = React.useState();
    const [isOpen, setIsOpen] = React.useState(true);
    React.useEffect(() => {
        switch (statusToggleIcon) {
            case 'danger':
                setIcon(React.createElement(TimesCircleIcon, null));
                break;
            case 'success':
                setIcon(React.createElement(CheckCircleIcon, null));
                break;
            case 'inProgress':
                setIcon(React.createElement(InProgressIcon, null));
                break;
            default:
                setIcon(statusToggleIcon);
        }
    }, [statusToggleIcon]);
    const toggle = (React.createElement("div", { className: styles.multipleFileUploadStatusProgress },
        React.createElement("div", { className: `${styles.multipleFileUploadStatusProgress}-icon` }, icon),
        React.createElement("div", { className: `${styles.multipleFileUploadStatusProgress}-text` }, statusToggleText)));
    const toggleExpandableSection = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", Object.assign({ className: css(styles.multipleFileUploadStatus, className) }, props),
        React.createElement(GenerateId, { prefix: "pf-expandable-section-" }, (expandableSectionId) => (React.createElement(ExpandableSection, { contentId: `${expandableSectionId}-content`, toggleId: `${expandableSectionId}-toggle`, toggleContent: toggle, isExpanded: isOpen, onToggle: toggleExpandableSection },
            React.createElement("ul", { className: `${styles.multipleFileUploadStatus}-list`, role: "list", "aria-label": ariaLabel }, children))))));
};
MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
//# sourceMappingURL=MultipleFileUploadStatus.js.map