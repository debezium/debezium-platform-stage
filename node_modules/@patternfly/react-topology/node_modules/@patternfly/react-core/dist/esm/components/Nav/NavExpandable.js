import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav.mjs';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { getUniqueId } from '../../helpers/util';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
class NavExpandable extends React.Component {
    constructor() {
        super(...arguments);
        this.id = this.props.id || getUniqueId();
        this.state = {
            expandedState: this.props.isExpanded,
            ouiaStateId: getDefaultOUIAId(NavExpandable.displayName)
        };
        this.onExpand = (event, onToggle) => {
            const { expandedState } = this.state;
            if (this.props.onExpand) {
                this.props.onExpand(event, !expandedState);
            }
            else {
                this.setState((prevState) => ({ expandedState: !prevState.expandedState }));
                const { groupId } = this.props;
                onToggle(event, groupId, !expandedState);
            }
        };
    }
    componentDidMount() {
        this.setState({ expandedState: this.props.isExpanded });
    }
    componentDidUpdate(prevProps) {
        if (this.props.isExpanded !== prevProps.isExpanded) {
            this.setState({ expandedState: this.props.isExpanded });
        }
    }
    render() {
        const _a = this.props, { title, srText, children, className, isActive, ouiaId, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        groupId, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isExpanded, buttonProps, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onExpand } = _a, props = __rest(_a, ["title", "srText", "children", "className", "isActive", "ouiaId", "groupId", "id", "isExpanded", "buttonProps", "onExpand"]);
        const { expandedState, ouiaStateId } = this.state;
        return (React.createElement(NavContext.Consumer, null, (context) => (React.createElement("li", Object.assign({ className: css(styles.navItem, expandedState && styles.modifiers.expanded, isActive && styles.modifiers.current, className) }, getOUIAProps(NavExpandable.displayName, ouiaId !== undefined ? ouiaId : ouiaStateId), props),
            React.createElement(PageSidebarContext.Consumer, null, ({ isSidebarOpen }) => (React.createElement("button", Object.assign({ className: css(styles.navLink), id: srText ? null : this.id, onClick: (event) => this.onExpand(event, context.onToggle), "aria-expanded": expandedState, tabIndex: isSidebarOpen ? null : -1 }, buttonProps),
                typeof title !== 'string' ? React.createElement("span", { className: css(`${styles.nav}__link-text`) }, title) : title,
                React.createElement("span", { className: css(styles.navToggle) },
                    React.createElement("span", { className: css(styles.navToggleIcon) },
                        React.createElement(AngleRightIcon, { "aria-hidden": "true" })))))),
            React.createElement("section", { className: css(styles.navSubnav), "aria-labelledby": this.id, hidden: expandedState ? null : true },
                srText && (React.createElement("h2", { className: "pf-v6-screen-reader", id: this.id }, srText)),
                React.createElement("ul", { className: css(styles.navList), role: "list" }, children))))));
    }
}
NavExpandable.displayName = 'NavExpandable';
NavExpandable.defaultProps = {
    srText: '',
    isExpanded: false,
    children: '',
    className: '',
    groupId: null,
    isActive: false,
    id: ''
};
export { NavExpandable };
//# sourceMappingURL=NavExpandable.js.map