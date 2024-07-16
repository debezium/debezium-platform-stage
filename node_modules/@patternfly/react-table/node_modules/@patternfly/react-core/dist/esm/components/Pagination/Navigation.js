import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination.mjs';
import { css } from '@patternfly/react-styles';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import { Button, ButtonVariant } from '../Button';
import { TextInput } from '../TextInput';
import { pluralize } from '../../helpers';
import { KeyTypes } from '../../helpers/constants';
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewPage = (_evt, newPage) => {
            const { perPage, onSetPage } = this.props;
            const startIdx = (newPage - 1) * perPage;
            const endIdx = newPage * perPage;
            return onSetPage(_evt, newPage, perPage, startIdx, endIdx);
        };
        this.state = { userInputPage: this.props.page };
    }
    static parseInteger(input, lastPage) {
        // eslint-disable-next-line radix
        let inputPage = Number.parseInt(input, 10);
        if (!Number.isNaN(inputPage)) {
            inputPage = inputPage > lastPage ? lastPage : inputPage;
            inputPage = inputPage < 1 ? 1 : inputPage;
        }
        return inputPage;
    }
    onChange(event, lastPage) {
        const inputPage = Navigation.parseInteger(event.currentTarget.value, lastPage);
        this.setState({ userInputPage: Number.isNaN(inputPage) ? event.currentTarget.value : inputPage });
    }
    onKeyDown(event, page, lastPage, onPageInput) {
        const allowedKeys = [
            'Tab',
            'Backspace',
            'Delete',
            'ArrowLeft',
            'ArrowRight',
            'Home',
            'End',
            'ArrowUp',
            'ArrowDown'
        ];
        if (event.key === KeyTypes.Enter) {
            const inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage);
            onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
            this.handleNewPage(event, Number.isNaN(inputPage) ? page : inputPage);
        }
        else if (!/^\d*$/.test(event.key) && !allowedKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    componentDidUpdate(lastState) {
        if (this.props.page !== lastState.page &&
            this.props.page <= this.props.lastPage &&
            this.state.userInputPage !== this.props.page) {
            this.setState({ userInputPage: this.props.page });
        }
    }
    render() {
        const _a = this.props, { page, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        perPage, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSetPage, isDisabled, itemCount, lastPage, firstPage, pagesTitle, pagesTitlePlural, toLastPageAriaLabel, toNextPageAriaLabel, toFirstPageAriaLabel, toPreviousPageAriaLabel, currPageAriaLabel, paginationAriaLabel, ofWord, onNextClick, onPreviousClick, onFirstClick, onLastClick, onPageInput, className, isCompact } = _a, props = __rest(_a, ["page", "perPage", "onSetPage", "isDisabled", "itemCount", "lastPage", "firstPage", "pagesTitle", "pagesTitlePlural", "toLastPageAriaLabel", "toNextPageAriaLabel", "toFirstPageAriaLabel", "toPreviousPageAriaLabel", "currPageAriaLabel", "paginationAriaLabel", "ofWord", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]);
        const { userInputPage } = this.state;
        return (React.createElement("nav", Object.assign({ className: css(styles.paginationNav, className), "aria-label": paginationAriaLabel }, props),
            !isCompact && (React.createElement("div", { className: css(styles.paginationNavControl, styles.modifiers.first) },
                React.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "aria-label": toFirstPageAriaLabel, "data-action": "first", onClick: (event) => {
                        onFirstClick(event, 1);
                        this.handleNewPage(event, 1);
                        this.setState({ userInputPage: 1 });
                    }, icon: React.createElement(AngleDoubleLeftIcon, null) }))),
            React.createElement("div", { className: styles.paginationNavControl },
                React.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "data-action": "previous", onClick: (event) => {
                        const newPage = page - 1 >= 1 ? page - 1 : 1;
                        onPreviousClick(event, newPage);
                        this.handleNewPage(event, newPage);
                        this.setState({ userInputPage: newPage });
                    }, "aria-label": toPreviousPageAriaLabel, icon: React.createElement(AngleLeftIcon, null) })),
            !isCompact && (React.createElement("div", { className: styles.paginationNavPageSelect },
                React.createElement(TextInput, { "aria-label": currPageAriaLabel, type: "number", isDisabled: isDisabled || (itemCount && page === firstPage && page === lastPage && itemCount >= 0) || page === 0, min: lastPage <= 0 && firstPage <= 0 ? 0 : 1, max: lastPage, value: userInputPage, onKeyDown: (event) => this.onKeyDown(event, page, lastPage, onPageInput), onChange: (event) => this.onChange(event, lastPage) }),
                (itemCount || itemCount === 0) && (React.createElement("span", { "aria-hidden": "true" },
                    ofWord,
                    " ",
                    pagesTitle ? pluralize(lastPage, pagesTitle, pagesTitlePlural) : lastPage)))),
            React.createElement("div", { className: styles.paginationNavControl },
                React.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toNextPageAriaLabel, "data-action": "next", onClick: (event) => {
                        const newPage = page + 1 <= lastPage ? page + 1 : lastPage;
                        onNextClick(event, newPage);
                        this.handleNewPage(event, newPage);
                        this.setState({ userInputPage: newPage });
                    }, icon: React.createElement(AngleRightIcon, null) })),
            !isCompact && (React.createElement("div", { className: css(styles.paginationNavControl, styles.modifiers.last) },
                React.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toLastPageAriaLabel, "data-action": "last", onClick: (event) => {
                        onLastClick(event, lastPage);
                        this.handleNewPage(event, lastPage);
                        this.setState({ userInputPage: lastPage });
                    }, icon: React.createElement(AngleDoubleRightIcon, null) })))));
    }
}
Navigation.displayName = 'Navigation';
Navigation.defaultProps = {
    className: '',
    isDisabled: false,
    isCompact: false,
    lastPage: 0,
    firstPage: 0,
    pagesTitle: '',
    pagesTitlePlural: '',
    toLastPageAriaLabel: 'Go to last page',
    toNextPageAriaLabel: 'Go to next page',
    toFirstPageAriaLabel: 'Go to first page',
    toPreviousPageAriaLabel: 'Go to previous page',
    currPageAriaLabel: 'Current page',
    paginationAriaLabel: 'Pagination',
    ofWord: 'of',
    onNextClick: () => undefined,
    onPreviousClick: () => undefined,
    onFirstClick: () => undefined,
    onLastClick: () => undefined,
    onPageInput: () => undefined
};
export { Navigation };
//# sourceMappingURL=Navigation.js.map