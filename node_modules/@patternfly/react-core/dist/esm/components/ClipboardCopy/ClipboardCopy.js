import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy.mjs';
import { css } from '@patternfly/react-styles';
import { TooltipPosition } from '../Tooltip';
import { TextInput } from '../TextInput';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { ClipboardCopyButton } from './ClipboardCopyButton';
import { ClipboardCopyToggle } from './ClipboardCopyToggle';
import { ClipboardCopyExpanded } from './ClipboardCopyExpanded';
import { getOUIAProps } from '../../helpers';
export const clipboardCopyFunc = (_event, text) => {
    try {
        navigator.clipboard.writeText(text.toString());
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Clipboard API not found, this copy function will not work. This is likely because you're using an", "unsupported browser or you're not using HTTPS. \n\nIf you're a developer building an application which needs", "to support copying to the clipboard without the clipboard API, you'll have to create your own copy", 'function and pass it to the ClipboardCopy component as the onCopy prop. For more information see', 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard');
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
export var ClipboardCopyVariant;
(function (ClipboardCopyVariant) {
    ClipboardCopyVariant["inline"] = "inline";
    ClipboardCopyVariant["expansion"] = "expansion";
    ClipboardCopyVariant["inlineCompact"] = "inline-compact";
})(ClipboardCopyVariant || (ClipboardCopyVariant = {}));
class ClipboardCopy extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.componentDidUpdate = (prevProps, prevState) => {
            if (prevProps.children !== this.props.children) {
                const newText = this.props.children;
                this.setState({ text: newText, textWhenExpanded: newText });
            }
        };
        this.componentWillUnmount = () => {
            if (this.timer) {
                window.clearTimeout(this.timer);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.expandContent = (_event) => {
            this.setState((prevState) => ({
                expanded: !prevState.expanded
            }));
        };
        this.updateText = (event, text) => {
            this.setState({ text });
            this.props.onChange(event, text);
        };
        this.updateTextWhenExpanded = (event, text) => {
            this.setState({ textWhenExpanded: text });
            this.props.onChange(event, text);
        };
        this.render = () => {
            const _a = this.props, { 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            isExpanded, onChange, // Don't pass to <div>
            /* eslint-enable @typescript-eslint/no-unused-vars */
            isReadOnly, isCode, isBlock, exitDelay, maxWidth, entryDelay, onCopy, hoverTip, clickTip, textAriaLabel, toggleAriaLabel, variant, position, className, additionalActions, ouiaId, ouiaSafe } = _a, divProps = __rest(_a, ["isExpanded", "onChange", "isReadOnly", "isCode", "isBlock", "exitDelay", "maxWidth", "entryDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className", "additionalActions", "ouiaId", "ouiaSafe"]);
            const textIdPrefix = 'text-input-';
            const toggleIdPrefix = 'toggle-';
            const contentIdPrefix = 'content-';
            return (React.createElement("div", Object.assign({ className: css(styles.clipboardCopy, variant === 'inline-compact' && styles.modifiers.inline, isBlock && styles.modifiers.block, this.state.expanded && styles.modifiers.expanded, className) }, divProps, getOUIAProps(ClipboardCopy.displayName, ouiaId, ouiaSafe)),
                variant === 'inline-compact' && (React.createElement(GenerateId, { prefix: "" }, (id) => (React.createElement(React.Fragment, null,
                    !isCode && (React.createElement("span", { className: css(styles.clipboardCopyText), id: `${textIdPrefix}${id}` }, this.state.text)),
                    isCode && (React.createElement("code", { className: css(styles.clipboardCopyText, styles.modifiers.code), id: `${textIdPrefix}${id}` }, this.state.text)),
                    React.createElement("span", { className: css(styles.clipboardCopyActions) },
                        React.createElement("span", { className: css(styles.clipboardCopyActionsItem) },
                            React.createElement(ClipboardCopyButton, { variant: "plain", exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                    onCopy(event, this.state.text);
                                    this.setState({ copied: true });
                                }, onTooltipHidden: () => this.setState({ copied: false }) }, this.state.copied ? clickTip : hoverTip)),
                        additionalActions && additionalActions))))),
                variant !== 'inline-compact' && (React.createElement(GenerateId, { prefix: "" }, (id) => (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: css(styles.clipboardCopyGroup) },
                        variant === 'expansion' && (React.createElement(ClipboardCopyToggle, { isExpanded: this.state.expanded, onClick: (_event) => {
                                this.expandContent(_event);
                                if (this.state.expanded) {
                                    this.setState({ text: this.state.textWhenExpanded });
                                }
                                else {
                                    this.setState({ textWhenExpanded: this.state.text });
                                }
                            }, id: `${toggleIdPrefix}${id}`, textId: `${textIdPrefix}${id}`, contentId: `${contentIdPrefix}${id}`, "aria-label": toggleAriaLabel })),
                        React.createElement(TextInput, Object.assign({ readOnlyVariant: isReadOnly || this.state.expanded ? 'default' : undefined, onChange: this.updateText, value: this.state.expanded ? this.state.textWhenExpanded : this.state.text, id: `text-input-${id}`, "aria-label": textAriaLabel }, (isCode && { dir: 'ltr' }))),
                        React.createElement(ClipboardCopyButton, { exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                onCopy(event, this.state.expanded ? this.state.textWhenExpanded : this.state.text);
                                this.setState({ copied: true });
                            }, onTooltipHidden: () => this.setState({ copied: false }) }, this.state.copied ? clickTip : hoverTip)),
                    this.state.expanded && (React.createElement(ClipboardCopyExpanded, { isReadOnly: isReadOnly, isCode: isCode, id: `content-${id}`, onChange: this.updateTextWhenExpanded }, this.state.text))))))));
        };
        const text = Array.isArray(this.props.children) ? this.props.children.join('') : this.props.children;
        this.state = {
            text,
            expanded: this.props.isExpanded,
            copied: false,
            textWhenExpanded: text
        };
    }
}
ClipboardCopy.displayName = 'ClipboardCopy';
ClipboardCopy.defaultProps = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    isExpanded: false,
    isCode: false,
    variant: 'inline',
    position: TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1500,
    entryDelay: 300,
    onCopy: clipboardCopyFunc,
    onChange: () => undefined,
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content',
    additionalActions: null,
    ouiaSafe: true
};
export { ClipboardCopy };
//# sourceMappingURL=ClipboardCopy.js.map