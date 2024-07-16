import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker.mjs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button.mjs';
import calendarMonthStyles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month.mjs';
import { TextInput } from '../TextInput/TextInput';
import { Popover } from '../Popover/Popover';
import { InputGroup, InputGroupItem } from '../InputGroup';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import { CalendarMonth } from '../CalendarMonth';
import { useImperativeHandle } from 'react';
import { KeyTypes } from '../../helpers';
import { isValidDate } from '../../helpers/datetimeUtils';
import { HelperText, HelperTextItem } from '../HelperText';
import cssFormControlWidthChars from '@patternfly/react-tokens/dist/esm/c_date_picker__input_c_form_control_width_chars';
export const yyyyMMddFormat = (date) => `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
const DatePickerBase = (_a, ref) => {
    var { className, locale = undefined, dateFormat = yyyyMMddFormat, dateParse = (val) => (val.split('-').length === 3 ? new Date(`${val}T00:00:00`) : new Date(undefined)), isDisabled = false, placeholder = 'YYYY-MM-DD', value: valueProp = '', 'aria-label': ariaLabel = 'Date picker', buttonAriaLabel = 'Toggle date picker', onChange = () => undefined, onBlur = () => undefined, invalidFormatText = 'Invalid date', requiredDateOptions, helperText, appendTo = 'inline', popoverProps, monthFormat, weekdayFormat, longWeekdayFormat, dayFormat, weekStart, validators = [], rangeStart, style: styleProps = {}, inputProps = {} } = _a, props = __rest(_a, ["className", "locale", "dateFormat", "dateParse", "isDisabled", "placeholder", "value", 'aria-label', "buttonAriaLabel", "onChange", "onBlur", "invalidFormatText", "requiredDateOptions", "helperText", "appendTo", "popoverProps", "monthFormat", "weekdayFormat", "longWeekdayFormat", "dayFormat", "weekStart", "validators", "rangeStart", "style", "inputProps"]);
    const [value, setValue] = React.useState(valueProp);
    const [valueDate, setValueDate] = React.useState(dateParse(value));
    const [errorText, setErrorText] = React.useState('');
    const [popoverOpen, setPopoverOpen] = React.useState(false);
    const [selectOpen, setSelectOpen] = React.useState(false);
    const [pristine, setPristine] = React.useState(true);
    const [textInputFocused, setTextInputFocused] = React.useState(false);
    const widthChars = React.useMemo(() => Math.max(dateFormat(new Date()).length, placeholder.length), [dateFormat]);
    const style = Object.assign({ [cssFormControlWidthChars.name]: widthChars }, styleProps);
    const buttonRef = React.useRef();
    const datePickerWrapperRef = React.useRef();
    const triggerRef = React.useRef();
    const dateIsRequired = (requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.isRequired) || false;
    const emptyDateText = (requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.emptyDateText) || 'Date cannot be blank';
    React.useEffect(() => {
        setValue(valueProp);
        setValueDate(dateParse(valueProp));
    }, [valueProp]);
    React.useEffect(() => {
        if (isValidDate(valueDate)) {
            applyValidators(valueDate);
        }
    }, [validators]);
    React.useEffect(() => {
        setPristine(!value);
        const newValueDate = dateParse(value);
        if (errorText && isValidDate(newValueDate)) {
            applyValidators(newValueDate);
        }
        if (value === '' && !pristine && !textInputFocused) {
            dateIsRequired ? setErrorText(emptyDateText) : setErrorText('');
        }
    }, [value]);
    const applyValidators = (date) => {
        setErrorText(validators.map((validator) => validator(date)).join('\n') || '');
    };
    const onTextInput = (event, value) => {
        setValue(value);
        setErrorText('');
        const newValueDate = dateParse(value);
        setValueDate(newValueDate);
        if (isValidDate(newValueDate)) {
            onChange(event, value, new Date(newValueDate));
        }
        else {
            onChange(event, value);
        }
    };
    const onInputBlur = (event) => {
        setTextInputFocused(false);
        const newValueDate = dateParse(value);
        const dateIsValid = isValidDate(newValueDate);
        const onBlurDateArg = dateIsValid ? new Date(newValueDate) : undefined;
        onBlur(event, value, onBlurDateArg);
        if (dateIsValid) {
            applyValidators(newValueDate);
        }
        if (!dateIsValid && !pristine) {
            setErrorText(invalidFormatText);
        }
        if (!dateIsValid && pristine && (requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.isRequired)) {
            setErrorText(emptyDateText);
        }
    };
    const onDateClick = (_event, newValueDate) => {
        const newValue = dateFormat(newValueDate);
        setValue(newValue);
        setValueDate(newValueDate);
        applyValidators(newValueDate);
        setPopoverOpen(false);
        onChange(null, newValue, new Date(newValueDate));
    };
    const onKeyPress = (ev) => {
        if (ev.key === 'Enter' && value) {
            if (isValidDate(valueDate)) {
                applyValidators(valueDate);
            }
            else {
                setErrorText(invalidFormatText);
            }
        }
    };
    useImperativeHandle(ref, () => ({
        setCalendarOpen: (isOpen) => setPopoverOpen(isOpen),
        toggleCalendar: (setOpen) => {
            setPopoverOpen((prev) => (setOpen !== undefined ? setOpen : !prev));
        },
        isCalendarOpen: popoverOpen
    }), [setPopoverOpen, popoverOpen, selectOpen]);
    const createFocusSelectorString = (modifierClass) => `.${calendarMonthStyles.calendarMonthDatesCell}.${modifierClass} .${calendarMonthStyles.calendarMonthDate}`;
    const focusSelectorForSelectedDate = createFocusSelectorString(calendarMonthStyles.modifiers.selected);
    const focusSelectorForSelectedEndRangeDate = createFocusSelectorString(`${calendarMonthStyles.modifiers.selected}.${calendarMonthStyles.modifiers.endRange}`);
    const focusSelectorForUnselectedDate = createFocusSelectorString(calendarMonthStyles.modifiers.current);
    /**
     * Returns a CSS selector for a date button element which will receive initial focus after opening calendar popover.
     * In case of a range picker it returns the end date, if it is selected, start date otherwise.
     * In case of a normal datepicker it returns the selected date, if present, today otherwise.
     */
    const getElementSelectorToFocus = () => {
        if (isValidDate(valueDate) && isValidDate(rangeStart)) {
            return focusSelectorForSelectedEndRangeDate;
        }
        if (isValidDate(valueDate) || isValidDate(rangeStart)) {
            return focusSelectorForSelectedDate;
        }
        return focusSelectorForUnselectedDate;
    };
    return (React.createElement("div", Object.assign({ className: css(styles.datePicker, className), ref: datePickerWrapperRef, style: style }, props),
        React.createElement(Popover, Object.assign({ elementToFocus: getElementSelectorToFocus(), position: "bottom", bodyContent: React.createElement(CalendarMonth, { date: valueDate, onChange: onDateClick, locale: locale, 
                // Use truthy values of strings
                validators: validators.map((validator) => (date) => !validator(date)), onSelectToggle: (open) => setSelectOpen(open), monthFormat: monthFormat, weekdayFormat: weekdayFormat, longWeekdayFormat: longWeekdayFormat, dayFormat: dayFormat, weekStart: weekStart, rangeStart: rangeStart }), showClose: false, isVisible: popoverOpen, shouldClose: (event, hideFunction) => {
                event = event;
                if (event.key === KeyTypes.Escape && selectOpen) {
                    event.stopPropagation();
                    setSelectOpen(false);
                    return false;
                }
                // Let our button handle toggling
                if (buttonRef.current && buttonRef.current.contains(event.target)) {
                    return false;
                }
                if (popoverOpen) {
                    event.stopPropagation();
                    setPopoverOpen(false);
                    hideFunction();
                    // If datepicker is required and the popover is opened without the text input
                    // first receiving focus, we want to validate that the text input is not blank upon
                    // closing the popover
                    (requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.isRequired) && !value && setErrorText(emptyDateText);
                }
                if (event.key === KeyTypes.Escape && popoverOpen) {
                    event.stopPropagation();
                }
                return true;
            }, withFocusTrap: true, hasNoPadding: true, hasAutoWidth: true, appendTo: appendTo, triggerRef: triggerRef }, popoverProps),
            React.createElement("div", { className: styles.datePickerInput, ref: triggerRef },
                React.createElement(InputGroup, null,
                    React.createElement(InputGroupItem, null,
                        React.createElement(TextInput, Object.assign({ isDisabled: isDisabled, isRequired: requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.isRequired, "aria-label": ariaLabel, placeholder: placeholder, validated: errorText.trim() ? 'error' : 'default', value: value, onChange: onTextInput, onBlur: onInputBlur, onFocus: () => setTextInputFocused(true), onKeyPress: onKeyPress }, inputProps))),
                    React.createElement(InputGroupItem, null,
                        React.createElement("button", { ref: buttonRef, 
                            // TODO: Removed style follow up work with issue #8457
                            className: css(buttonStyles.button, buttonStyles.modifiers.control), "aria-label": buttonAriaLabel, type: "button", onClick: () => setPopoverOpen(!popoverOpen), disabled: isDisabled },
                            React.createElement(OutlinedCalendarAltIcon, null)))))),
        (errorText || helperText) && (React.createElement("div", { className: styles.datePickerHelperText }, errorText ? (React.createElement(HelperText, null,
            React.createElement(HelperTextItem, { variant: "error" }, errorText))) : (helperText)))));
};
export const DatePicker = React.forwardRef(DatePickerBase);
DatePicker.displayName = 'DatePicker';
//# sourceMappingURL=DatePicker.js.map