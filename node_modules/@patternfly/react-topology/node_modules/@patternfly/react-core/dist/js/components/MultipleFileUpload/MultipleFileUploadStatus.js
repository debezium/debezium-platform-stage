"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleFileUploadStatus = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const multiple_file_upload_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload"));
const react_styles_1 = require("@patternfly/react-styles");
const ExpandableSection_1 = require("../ExpandableSection");
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
const in_progress_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/in-progress-icon'));
const check_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/check-circle-icon'));
const times_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-circle-icon'));
const MultipleFileUploadStatus = (_a) => {
    var { children, className, statusToggleText, statusToggleIcon, 'aria-label': ariaLabel } = _a, props = tslib_1.__rest(_a, ["children", "className", "statusToggleText", "statusToggleIcon", 'aria-label']);
    const [icon, setIcon] = React.useState();
    const [isOpen, setIsOpen] = React.useState(true);
    React.useEffect(() => {
        switch (statusToggleIcon) {
            case 'danger':
                setIcon(React.createElement(times_circle_icon_1.default, null));
                break;
            case 'success':
                setIcon(React.createElement(check_circle_icon_1.default, null));
                break;
            case 'inProgress':
                setIcon(React.createElement(in_progress_icon_1.default, null));
                break;
            default:
                setIcon(statusToggleIcon);
        }
    }, [statusToggleIcon]);
    const toggle = (React.createElement("div", { className: multiple_file_upload_1.default.multipleFileUploadStatusProgress },
        React.createElement("div", { className: `${multiple_file_upload_1.default.multipleFileUploadStatusProgress}-icon` }, icon),
        React.createElement("div", { className: `${multiple_file_upload_1.default.multipleFileUploadStatusProgress}-text` }, statusToggleText)));
    const toggleExpandableSection = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(multiple_file_upload_1.default.multipleFileUploadStatus, className) }, props),
        React.createElement(GenerateId_1.GenerateId, { prefix: "pf-expandable-section-" }, (expandableSectionId) => (React.createElement(ExpandableSection_1.ExpandableSection, { contentId: `${expandableSectionId}-content`, toggleId: `${expandableSectionId}-toggle`, toggleContent: toggle, isExpanded: isOpen, onToggle: toggleExpandableSection },
            React.createElement("ul", { className: `${multiple_file_upload_1.default.multipleFileUploadStatus}-list`, role: "list", "aria-label": ariaLabel }, children))))));
};
exports.MultipleFileUploadStatus = MultipleFileUploadStatus;
exports.MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
//# sourceMappingURL=MultipleFileUploadStatus.js.map