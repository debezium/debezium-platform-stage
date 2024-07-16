import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy.mjs';
import { css } from '@patternfly/react-styles';
class ClipboardCopyExpanded extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { className, children, onChange, isReadOnly, isCode } = _a, props = __rest(_a, ["className", "children", "onChange", "isReadOnly", "isCode"]);
        return (React.createElement("div", Object.assign({ suppressContentEditableWarning: true, className: css(styles.clipboardCopyExpandableContent, className), onInput: (e) => onChange(e, e.target.innerText), contentEditable: !isReadOnly }, props), isCode ? React.createElement("pre", { dir: "ltr" }, children) : children));
    }
}
ClipboardCopyExpanded.displayName = 'ClipboardCopyExpanded';
ClipboardCopyExpanded.defaultProps = {
    onChange: () => undefined,
    className: '',
    isReadOnly: false,
    isCode: false
};
export { ClipboardCopyExpanded };
//# sourceMappingURL=ClipboardCopyExpanded.js.map