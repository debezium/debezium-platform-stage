import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links.mjs';
import sidebarStyles from '@patternfly/react-styles/css/components/Sidebar/sidebar.mjs';
import { JumpLinksItem } from './JumpLinksItem';
import { JumpLinksList } from './JumpLinksList';
import { formatBreakpointMods } from '../../helpers/util';
import { Button } from '../Button';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import cssToggleDisplayVar from '@patternfly/react-tokens/dist/esm/c_jump_links__toggle_Display';
import { canUseDOM } from '../../helpers/util';
// Recursively find JumpLinkItems and return an array of all their scrollNodes
const getScrollItems = (children, res) => {
    React.Children.forEach(children, (child) => {
        if (canUseDOM && document.getElementById && document.querySelector && child.type === JumpLinksItem) {
            const scrollNode = child.props.node || child.props.href;
            if (typeof scrollNode === 'string') {
                if (scrollNode.startsWith('#')) {
                    // Allow spaces and other special characters as `id`s to be nicer to consumers
                    // https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
                    res.push(document.getElementById(scrollNode.substr(1)));
                }
                else {
                    res.push(document.querySelector(scrollNode));
                }
            }
            else if (scrollNode instanceof HTMLElement) {
                res.push(scrollNode);
            }
        }
        if ([React.Fragment, JumpLinksList, JumpLinksItem].includes(child.type)) {
            getScrollItems(child.props.children, res);
        }
    });
    return res;
};
function isResponsive(jumpLinks) {
    // https://github.com/patternfly/patternfly/blob/main/src/patternfly/components/JumpLinks/jump-links.scss#L103
    return jumpLinks && getComputedStyle(jumpLinks).getPropertyValue(cssToggleDisplayVar.name).includes('block');
}
export const JumpLinks = (_a) => {
    var { isCentered, isVertical, children, label, 'aria-label': ariaLabel = typeof label === 'string' ? label : null, scrollableRef, scrollableSelector, activeIndex: activeIndexProp = 0, offset = 0, expandable, isExpanded: isExpandedProp = false, alwaysShowLabel = true, toggleAriaLabel = 'Toggle jump links', className } = _a, props = __rest(_a, ["isCentered", "isVertical", "children", "label", 'aria-label', "scrollableRef", "scrollableSelector", "activeIndex", "offset", "expandable", "isExpanded", "alwaysShowLabel", "toggleAriaLabel", "className"]);
    const hasScrollSpy = Boolean(scrollableRef || scrollableSelector);
    const [scrollItems, setScrollItems] = React.useState(hasScrollSpy ? getScrollItems(children, []) : []);
    const [activeIndex, setActiveIndex] = React.useState(activeIndexProp);
    const [isExpanded, setIsExpanded] = React.useState(isExpandedProp);
    // Boolean to disable scroll listener from overriding active state of clicked jumplink
    const isLinkClicked = React.useRef(false);
    const navRef = React.useRef();
    let scrollableElement;
    const getScrollableElement = () => {
        if (scrollableRef) {
            if (scrollableRef instanceof HTMLElement) {
                return scrollableRef;
            }
            else if (typeof scrollableRef === 'function') {
                return scrollableRef();
            }
            return scrollableRef.current;
        }
        else if (scrollableSelector) {
            return document.querySelector(scrollableSelector);
        }
    };
    const scrollSpy = React.useCallback(() => {
        if (!canUseDOM || !hasScrollSpy || !(scrollableElement instanceof HTMLElement)) {
            return;
        }
        if (isLinkClicked.current) {
            isLinkClicked.current = false;
            return;
        }
        const scrollPosition = Math.ceil(scrollableElement.scrollTop + offset);
        window.requestAnimationFrame(() => {
            let newScrollItems = scrollItems;
            // Items might have rendered after this component or offsetTop values may need
            // to be updated. Do a quick refresh.
            const requiresRefresh = newScrollItems.every((e) => !(e === null || e === void 0 ? void 0 : e.offsetTop)) || !newScrollItems[0] || newScrollItems.includes(null);
            if (requiresRefresh) {
                newScrollItems = getScrollItems(children, []);
                setScrollItems(newScrollItems);
            }
            const scrollElements = newScrollItems
                .map((e, index) => ({
                y: e ? e.offsetTop : null,
                index
            }))
                .filter(({ y }) => y !== null)
                .sort((e1, e2) => e2.y - e1.y);
            for (const { y, index } of scrollElements) {
                if (scrollPosition >= y) {
                    return setActiveIndex(index);
                }
            }
        });
    }, [scrollItems, hasScrollSpy, scrollableElement, offset]);
    React.useEffect(() => {
        scrollableElement = getScrollableElement();
        if (!(scrollableElement instanceof HTMLElement)) {
            return;
        }
        scrollableElement.addEventListener('scroll', scrollSpy);
        return () => scrollableElement.removeEventListener('scroll', scrollSpy);
    }, [scrollableElement, scrollSpy, getScrollableElement]);
    React.useEffect(() => {
        scrollSpy();
    }, []);
    let jumpLinkIndex = 0;
    const cloneChildren = (children) => !hasScrollSpy
        ? children
        : React.Children.map(children, (child) => {
            if (child.type === JumpLinksItem) {
                const { onClick: onClickProp, isActive: isActiveProp } = child.props;
                const itemIndex = jumpLinkIndex++;
                const scrollItem = scrollItems[itemIndex];
                return React.cloneElement(child, {
                    onClick(ev) {
                        isLinkClicked.current = true;
                        // Items might have rendered after this component. Do a quick refresh.
                        let newScrollItems;
                        if (!scrollItem) {
                            newScrollItems = getScrollItems(children, []);
                            setScrollItems(newScrollItems);
                        }
                        const newScrollItem = scrollItem || newScrollItems[itemIndex];
                        if (newScrollItem) {
                            // we have to support scrolling to an offset due to sticky sidebar
                            const scrollableElement = getScrollableElement();
                            if (scrollableElement instanceof HTMLElement) {
                                if (isResponsive(navRef.current)) {
                                    // Remove class immediately so we can get collapsed height
                                    if (navRef.current) {
                                        navRef.current.classList.remove(styles.modifiers.expanded);
                                    }
                                    let stickyParent = navRef.current && navRef.current.parentElement;
                                    while (stickyParent && !stickyParent.classList.contains(sidebarStyles.modifiers.sticky)) {
                                        stickyParent = stickyParent.parentElement;
                                    }
                                    setIsExpanded(false);
                                    if (stickyParent) {
                                        offset += stickyParent.scrollHeight;
                                    }
                                }
                                scrollableElement.scrollTo(0, newScrollItem.offsetTop - offset);
                            }
                            newScrollItem.focus();
                            window.history.pushState('', '', ev.currentTarget.href);
                            ev.preventDefault();
                            setActiveIndex(itemIndex);
                        }
                        if (onClickProp) {
                            onClickProp(ev);
                        }
                    },
                    isActive: isActiveProp || activeIndex === itemIndex,
                    children: cloneChildren(child.props.children)
                });
            }
            else if (child.type === React.Fragment) {
                return cloneChildren(child.props.children);
            }
            else if (child.type === JumpLinksList) {
                return React.cloneElement(child, { children: cloneChildren(child.props.children) });
            }
            return child;
        });
    return (React.createElement("nav", Object.assign({ className: css(styles.jumpLinks, isCentered && styles.modifiers.center, isVertical && styles.modifiers.vertical, formatBreakpointMods(expandable, styles), isExpanded && styles.modifiers.expanded, className), "aria-label": ariaLabel, ref: navRef }, props),
        React.createElement("div", { className: styles.jumpLinksMain },
            React.createElement("div", { className: css(`${styles.jumpLinks}__header`) },
                expandable && (React.createElement("div", { className: styles.jumpLinksToggle },
                    React.createElement(Button, { variant: "plain", onClick: () => setIsExpanded(!isExpanded), "aria-label": toggleAriaLabel, "aria-expanded": isExpanded, icon: React.createElement("span", { className: styles.jumpLinksToggleIcon },
                            React.createElement(AngleRightIcon, null)) }, label && label))),
                label && alwaysShowLabel && React.createElement("div", { className: css(styles.jumpLinksLabel) }, label)),
            React.createElement("ul", { className: styles.jumpLinksList, role: "list" }, cloneChildren(children)))));
};
JumpLinks.displayName = 'JumpLinks';
//# sourceMappingURL=JumpLinks.js.map