"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavList = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const nav_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Nav/nav"));
const react_styles_1 = require("@patternfly/react-styles");
const Button_1 = require("../Button");
const angle_left_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-left-icon'));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const util_1 = require("../../helpers/util");
const Nav_1 = require("./Nav");
const PageSidebar_1 = require("../Page/PageSidebar");
const resizeObserver_1 = require("../../helpers/resizeObserver");
class NavList extends React.Component {
    constructor() {
        super(...arguments);
        this.direction = 'ltr';
        this.state = {
            scrollViewAtStart: false,
            scrollViewAtEnd: false
        };
        this.navList = React.createRef();
        this.observer = () => { };
        this.handleScrollButtons = () => {
            const container = this.navList.current;
            if (container) {
                // check if it elements are in view
                const scrollViewAtStart = (0, util_1.isElementInView)(container, container.firstChild, false);
                const scrollViewAtEnd = (0, util_1.isElementInView)(container, container.lastChild, false);
                this.setState({
                    scrollViewAtStart,
                    scrollViewAtEnd
                });
                this.context.updateIsScrollable(!scrollViewAtStart || !scrollViewAtEnd);
            }
        };
        this.scrollBack = () => {
            // find first Element that is fully in view on the left, then scroll to the element before it
            const container = this.navList.current;
            if (container) {
                const childrenArr = Array.from(container.children);
                let firstElementInView;
                let lastElementOutOfView;
                for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if ((0, util_1.isElementInView)(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    if (this.direction === 'ltr') {
                        // LTR scrolls left to go back
                        container.scrollLeft -= lastElementOutOfView.scrollWidth;
                    }
                    else {
                        // RTL scrolls right to go back
                        container.scrollLeft += lastElementOutOfView.scrollWidth;
                    }
                }
                this.handleScrollButtons();
            }
        };
        this.scrollForward = () => {
            // find last Element that is fully in view on the right, then scroll to the element after it
            const container = this.navList.current;
            if (container) {
                const childrenArr = Array.from(container.children);
                let lastElementInView;
                let firstElementOutOfView;
                for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if ((0, util_1.isElementInView)(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    if (this.direction === 'ltr') {
                        // LTR scrolls right to go forward
                        container.scrollLeft += firstElementOutOfView.scrollWidth;
                    }
                    else {
                        // RTL scrolls left to go forward
                        container.scrollLeft -= firstElementOutOfView.scrollWidth;
                    }
                }
                this.handleScrollButtons();
            }
        };
    }
    componentDidMount() {
        this.observer = (0, resizeObserver_1.getResizeObserver)(this.navList.current, this.handleScrollButtons, true);
        this.direction = (0, util_1.getLanguageDirection)(this.navList.current);
        this.handleScrollButtons();
    }
    componentWillUnmount() {
        this.observer();
    }
    componentDidUpdate() {
        this.direction = (0, util_1.getLanguageDirection)(this.navList.current);
    }
    render() {
        const _a = this.props, { children, className, backScrollAriaLabel, forwardScrollAriaLabel } = _a, props = tslib_1.__rest(_a, ["children", "className", "backScrollAriaLabel", "forwardScrollAriaLabel"]);
        const { scrollViewAtStart, scrollViewAtEnd } = this.state;
        return (React.createElement(Nav_1.NavContext.Consumer, null, ({ isHorizontal }) => (React.createElement(PageSidebar_1.PageSidebarContext.Consumer, null, ({ isSidebarOpen }) => (React.createElement(React.Fragment, null,
            isHorizontal && (!scrollViewAtStart || !scrollViewAtEnd) && (React.createElement("div", { className: (0, react_styles_1.css)(nav_1.default.navScrollButton) },
                React.createElement(Button_1.Button, { variant: "plain", "aria-label": backScrollAriaLabel, onClick: this.scrollBack, isDisabled: scrollViewAtStart, tabIndex: isSidebarOpen ? null : -1, icon: React.createElement(angle_left_icon_1.default, null) }))),
            React.createElement("ul", Object.assign({ ref: this.navList, className: (0, react_styles_1.css)(nav_1.default.navList, className), onScroll: this.handleScrollButtons, role: "list" }, props), children),
            isHorizontal && (!scrollViewAtStart || !scrollViewAtEnd) && (React.createElement("div", { className: (0, react_styles_1.css)(nav_1.default.navScrollButton) },
                React.createElement(Button_1.Button, { variant: "plain", "aria-label": forwardScrollAriaLabel, onClick: this.scrollForward, isDisabled: scrollViewAtEnd, tabIndex: isSidebarOpen ? null : -1, icon: React.createElement(angle_right_icon_1.default, null) })))))))));
    }
}
exports.NavList = NavList;
NavList.displayName = 'NavList';
NavList.contextType = Nav_1.NavContext;
NavList.defaultProps = {
    backScrollAriaLabel: 'Scroll back',
    forwardScrollAriaLabel: 'Scroll foward'
};
//# sourceMappingURL=NavList.js.map