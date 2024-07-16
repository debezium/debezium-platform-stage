import { __rest } from "tslib";
import React, { useEffect } from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Select, SelectList, SelectOption } from '../Select';
import { MenuToggle } from '../MenuToggle';
import { InputGroup, InputGroupItem } from '../InputGroup';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month.mjs';
import { getUniqueId } from '../../helpers/util';
import { isValidDate } from '../../helpers/datetimeUtils';
export var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));
const buildCalendar = (year, month, weekStart, validators) => {
    const defaultDate = new Date(year, month);
    const firstDayOfWeek = new Date(defaultDate);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + weekStart);
    // We will show a maximum of 6 weeks like Google calendar
    // Assume we just want the numbers for now...
    const calendarWeeks = [];
    if (firstDayOfWeek.getMonth() === defaultDate.getMonth() && firstDayOfWeek.getDate() !== 1) {
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);
    }
    for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            const date = new Date(firstDayOfWeek);
            week.push({
                date,
                isValid: validators.every((validator) => validator(date))
            });
            firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        }
        calendarWeeks.push(week);
        if (firstDayOfWeek.getMonth() !== defaultDate.getMonth()) {
            break;
        }
    }
    return calendarWeeks;
};
const isSameDate = (d1, d2) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
const today = new Date();
/** The main calendar month component. */
export const CalendarMonth = (_a) => {
    var { date: dateProp, locale = undefined, monthFormat = (date) => date.toLocaleDateString(locale, { month: 'long' }), weekdayFormat = (date) => date.toLocaleDateString(locale, { weekday: 'narrow' }), longWeekdayFormat = (date) => date.toLocaleDateString(locale, { weekday: 'long' }), dayFormat = (date) => date.getDate(), weekStart = 0, // Use the American Sunday as a default
    onChange = () => { }, validators = [() => true], className, onSelectToggle = () => { }, onMonthChange = () => { }, rangeStart, prevMonthAriaLabel = 'Previous month', nextMonthAriaLabel = 'Next month', yearInputAriaLabel = 'Select year', cellAriaLabel, isDateFocused = false, inlineProps } = _a, props = __rest(_a, ["date", "locale", "monthFormat", "weekdayFormat", "longWeekdayFormat", "dayFormat", "weekStart", "onChange", "validators", "className", "onSelectToggle", "onMonthChange", "rangeStart", "prevMonthAriaLabel", "nextMonthAriaLabel", "yearInputAriaLabel", "cellAriaLabel", "isDateFocused", "inlineProps"]);
    const longMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        .map((monthNum) => new Date(1990, monthNum))
        .map(monthFormat);
    const [isSelectOpen, setIsSelectOpen] = React.useState(false);
    const getInitialDate = () => {
        if (isValidDate(dateProp)) {
            return dateProp;
        }
        if (isValidDate(rangeStart)) {
            return rangeStart;
        }
        return today;
    };
    const initialDate = getInitialDate();
    const [focusedDate, setFocusedDate] = React.useState(initialDate);
    // Must be numeric given current header design
    const yearFormat = (date) => date.getFullYear();
    //
    const yearFormatted = yearFormat(focusedDate);
    const [yearInput, setYearInput] = React.useState(yearFormatted.toString());
    const [hoveredDate, setHoveredDate] = React.useState(undefined);
    const focusRef = React.useRef();
    const [hiddenMonthId] = React.useState(getUniqueId('hidden-month-span'));
    const [shouldFocus, setShouldFocus] = React.useState(false);
    const isValidated = (date) => validators.every((validator) => validator(date));
    const focusedDateValidated = isValidated(focusedDate);
    useEffect(() => {
        if (isValidDate(dateProp) && !isSameDate(focusedDate, dateProp)) {
            setFocusedDate(dateProp);
        }
        else if (!dateProp) {
            setFocusedDate(today);
        }
    }, [dateProp]);
    useEffect(() => {
        // Calendar month should not be focused on page load
        if ((shouldFocus || isDateFocused) && focusedDateValidated && focusRef.current) {
            focusRef.current.focus();
        }
    }, [focusedDate, isDateFocused, focusedDateValidated, focusRef]);
    const onMonthClick = (ev, newDate) => {
        setFocusedDate(newDate);
        setShouldFocus(false);
        onMonthChange(ev, newDate);
        setYearInput(yearFormat(newDate).toString());
    };
    const onKeyDown = (ev) => {
        const newDate = new Date(focusedDate);
        if (ev.key === 'ArrowUp') {
            newDate.setDate(newDate.getDate() - 7);
        }
        else if (ev.key === 'ArrowRight') {
            newDate.setDate(newDate.getDate() + 1);
        }
        else if (ev.key === 'ArrowDown') {
            newDate.setDate(newDate.getDate() + 7);
        }
        else if (ev.key === 'ArrowLeft') {
            newDate.setDate(newDate.getDate() - 1);
        }
        if (newDate.getTime() !== focusedDate.getTime() && isValidated(newDate)) {
            ev.preventDefault();
            setFocusedDate(newDate);
            setShouldFocus(true);
        }
    };
    const changeYear = (newYear) => changeMonth(focusedDate.getMonth(), newYear);
    const changeMonth = (newMonth, newYear) => new Date(newYear !== null && newYear !== void 0 ? newYear : focusedDate.getFullYear(), newMonth, 1);
    const MIN_YEAR = 1900;
    const MAX_YEAR = 2100;
    const handleYearInputChange = (event, yearStr) => {
        if (!/^\d{0,4}$/.test(yearStr)) {
            return;
        }
        setYearInput(yearStr);
        if (yearStr.length === 4) {
            const yearNum = Number(yearStr);
            if (yearNum >= MIN_YEAR && yearNum <= MAX_YEAR) {
                const newDate = changeYear(yearNum);
                setFocusedDate(newDate);
                setShouldFocus(false);
                // We need to manually focus the year input in FireFox when the scroll buttons are clicked, as FireFox doesn't place focus automatically
                event.target.focus();
                onMonthChange(event, newDate);
            }
            else {
                setYearInput(yearFormatted.toString());
            }
        }
    };
    const addMonth = (toAdd) => {
        let newMonth = focusedDate.getMonth() + toAdd;
        let newYear = focusedDate.getFullYear();
        if (newMonth === -1) {
            newMonth = 11;
            newYear--;
        }
        else if (newMonth === 12) {
            newMonth = 0;
            newYear++;
        }
        return changeMonth(newMonth, newYear);
    };
    const prevMonth = addMonth(-1);
    const nextMonth = addMonth(1);
    const focusedYear = focusedDate.getFullYear();
    const focusedMonth = focusedDate.getMonth();
    const calendar = React.useMemo(() => buildCalendar(focusedYear, focusedMonth, weekStart, validators), [focusedYear, focusedMonth, weekStart, validators]);
    if (!focusedDateValidated) {
        const toFocus = calendar
            .reduce((acc, cur) => [...acc, ...cur], [])
            .filter(({ date, isValid }) => isValid && date.getMonth() === focusedMonth)
            .map(({ date }) => ({ date, days: Math.abs(focusedDate.getTime() - date.getTime()) }))
            .sort((o1, o2) => o1.days - o2.days)
            .map(({ date }) => date)[0];
        if (toFocus) {
            setFocusedDate(toFocus);
        }
    }
    const isHoveredDateValid = hoveredDate && isValidated(hoveredDate);
    const monthFormatted = monthFormat(focusedDate);
    const calendarToRender = (React.createElement("div", Object.assign({ className: css(styles.calendarMonth, className) }, props),
        React.createElement("div", { className: styles.calendarMonthHeader },
            React.createElement("div", { className: css(styles.calendarMonthHeaderNavControl, 'pf-m-prev-month') },
                React.createElement(Button, { variant: "plain", "aria-label": prevMonthAriaLabel, onClick: (ev) => onMonthClick(ev, prevMonth), icon: React.createElement(AngleLeftIcon, { "aria-hidden": true }) })),
            React.createElement(InputGroup, null,
                React.createElement(InputGroupItem, { isFill: true },
                    React.createElement("div", { className: styles.calendarMonthHeaderMonth },
                        React.createElement("span", { id: hiddenMonthId, hidden: true }, "Month"),
                        React.createElement(Select, { toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, onClick: () => setIsSelectOpen(!isSelectOpen), isExpanded: isSelectOpen, style: { width: '140px' } }, monthFormatted)), "aria-labelledby": hiddenMonthId, isOpen: isSelectOpen, onOpenChange: (isOpen) => {
                                setIsSelectOpen(isOpen);
                                onSelectToggle(isOpen);
                            }, onSelect: (ev, monthNum) => {
                                // When we put CalendarMonth in a Popover we want the Popover's onDocumentClick
                                // to see the SelectOption as a child so it doesn't close the Popover.
                                setTimeout(() => {
                                    setIsSelectOpen(false);
                                    onSelectToggle(false);
                                    const newDate = changeMonth(Number(monthNum));
                                    setFocusedDate(newDate);
                                    setShouldFocus(false);
                                    onMonthChange(ev, newDate);
                                }, 0);
                            }, selected: monthFormatted },
                            React.createElement(SelectList, null, longMonths.map((longMonth, index) => (React.createElement(SelectOption, { key: index, value: index, isSelected: longMonth === monthFormatted }, longMonth))))))),
                React.createElement(InputGroupItem, null,
                    React.createElement("div", { className: styles.calendarMonthHeaderYear },
                        React.createElement(TextInput, { "aria-label": yearInputAriaLabel, type: "number", value: yearInput, onChange: handleYearInputChange })))),
            React.createElement("div", { className: css(styles.calendarMonthHeaderNavControl, 'pf-m-next-month') },
                React.createElement(Button, { variant: "plain", "aria-label": nextMonthAriaLabel, onClick: (ev) => onMonthClick(ev, nextMonth), icon: React.createElement(AngleRightIcon, { "aria-hidden": true }) }))),
        React.createElement("table", { className: styles.calendarMonthCalendar, onMouseLeave: () => setHoveredDate(undefined) },
            React.createElement("thead", { className: styles.calendarMonthDays },
                React.createElement("tr", null, calendar[0].map(({ date }, index) => (React.createElement("th", { key: index, className: styles.calendarMonthDay, scope: "col" },
                    React.createElement("span", { className: "pf-v6-screen-reader" }, longWeekdayFormat(date)),
                    React.createElement("span", { "aria-hidden": true }, weekdayFormat(date))))))),
            React.createElement("tbody", { onKeyDown: onKeyDown }, calendar.map((week, index) => (React.createElement("tr", { key: index, className: styles.calendarMonthDatesRow }, week.map(({ date, isValid }, index) => {
                const dayFormatted = dayFormat(date);
                const isToday = isSameDate(date, today);
                const isSelected = isValidDate(dateProp) && isSameDate(date, dateProp);
                const isFocused = isSameDate(date, focusedDate);
                const isAdjacentMonth = date.getMonth() !== focusedDate.getMonth();
                const isRangeStart = isValidDate(rangeStart) && isSameDate(date, rangeStart);
                let isInRange = false;
                let isRangeEnd = false;
                if (isValidDate(rangeStart)) {
                    let rangeEndDate;
                    if (isValidDate(dateProp)) {
                        rangeEndDate = dateProp;
                    }
                    if (isHoveredDateValid && (!isValidDate(dateProp) || hoveredDate > dateProp)) {
                        rangeEndDate = hoveredDate;
                    }
                    if (rangeEndDate) {
                        isInRange = date >= rangeStart && date <= rangeEndDate;
                        isRangeEnd = isSameDate(date, rangeEndDate);
                    }
                    // Core would likely need new styles for "is selected but disabled"
                }
                return (React.createElement("td", { key: index, className: css(styles.calendarMonthDatesCell, isAdjacentMonth && styles.modifiers.adjacentMonth, isToday && styles.modifiers.current, (isSelected || isRangeStart) && styles.modifiers.selected, !isValid && !(isInRange || isRangeStart || isRangeEnd || isSelected) && styles.modifiers.disabled, isInRange && styles.modifiers.inRange, isRangeStart && styles.modifiers.startRange, isRangeEnd && styles.modifiers.endRange) },
                    React.createElement("button", Object.assign({ className: css(styles.calendarMonthDate, isRangeEnd && styles.modifiers.hover, !isValid && styles.modifiers.disabled), type: "button", onClick: (event) => onChange(event, date), onMouseOver: () => setHoveredDate(date), tabIndex: isFocused ? 0 : -1, disabled: !isValid, "aria-label": cellAriaLabel
                            ? cellAriaLabel(date)
                            : `${dayFormat(date)} ${monthFormat(date)} ${yearFormat(date)}` }, (isFocused && { ref: focusRef })), dayFormatted)));
            }))))))));
    if (inlineProps !== undefined) {
        const Component = (inlineProps.component ? inlineProps.component : 'article');
        return (React.createElement(Component, Object.assign({}, (inlineProps.ariaLabelledby && { 'aria-labelledby': inlineProps.ariaLabelledby })),
            inlineProps.title,
            calendarToRender));
    }
    return calendarToRender;
};
CalendarMonth.displayName = 'CalendarMonth';
//# sourceMappingURL=CalendarMonth.js.map