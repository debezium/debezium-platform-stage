"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = exports.yyyyMMddFormat = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const date_picker_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DatePicker/date-picker"));
const button_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Button/button"));
const calendar_month_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/CalendarMonth/calendar-month"));
const TextInput_1 = require("../TextInput/TextInput");
const Popover_1 = require("../Popover/Popover");
const InputGroup_1 = require("../InputGroup");
const outlined_calendar_alt_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/outlined-calendar-alt-icon'));
const CalendarMonth_1 = require("../CalendarMonth");
const react_1 = require("react");
const helpers_1 = require("../../helpers");
const datetimeUtils_1 = require("../../helpers/datetimeUtils");
const HelperText_1 = require("../HelperText");
const c_date_picker__input_c_form_control_width_chars_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_date_picker__input_c_form_control_width_chars'));
const yyyyMMddFormat = (date) => `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
exports.yyyyMMddFormat = yyyyMMddFormat;
const DatePickerBase = (_a, ref) => {
    var { className, locale = undefined, dateFormat = exports.yyyyMMddFormat, dateParse = (val) => (val.split('-').length === 3 ? new Date(`${val}T00:00:00`) : new Date(undefined)), isDisabled = false, placeholder = 'YYYY-MM-DD', value: valueProp = '', 'aria-label': ariaLabel = 'Date picker', buttonAriaLabel = 'Toggle date picker', onChange = () => undefined, onBlur = () => undefined, invalidFormatText = 'Invalid date', requiredDateOptions, helperText, appendTo = 'inline', popoverProps, monthFormat, weekdayFormat, longWeekdayFormat, dayFormat, weekStart, validators = [], rangeStart, style: styleProps = {}, inputProps = {} } = _a, props = tslib_1.__rest(_a, ["className", "locale", "dateFormat", "dateParse", "isDisabled", "placeholder", "value", 'aria-label', "buttonAriaLabel", "onChange", "onBlur", "invalidFormatText", "requiredDateOptions", "helperText", "appendTo", "popoverProps", "monthFormat", "weekdayFormat", "longWeekdayFormat", "dayFormat", "weekStart", "validators", "rangeStart", "style", "inputProps"]);
    const [value, setValue] = React.useState(valueProp);
    const [valueDate, setValueDate] = React.useState(dateParse(value));
    const [errorText, setErrorText] = React.useState('');
    const [popoverOpen, setPopoverOpen] = React.useState(false);
    const [selectOpen, setSelectOpen] = React.useState(false);
    const [pristine, setPristine] = React.useState(true);
    const [textInputFocused, setTextInputFocused] = React.useState(false);
    const widthChars = React.useMemo(() => Math.max(dateFormat(new Date()).length, placeholder.length), [dateFormat]);
    const style = Object.assign({ [c_date_picker__input_c_form_control_width_chars_1.default.name]: widthChars }, styleProps);
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
        if ((0, datetimeUtils_1.isValidDate)(valueDate)) {
            applyValidators(valueDate);
        }
    }, [validators]);
    React.useEffect(() => {
        setPristine(!value);
        const newValueDate = dateParse(value);
        if (errorText && (0, datetimeUtils_1.isValidDate)(newValueDate)) {
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
        if ((0, datetimeUtils_1.isValidDate)(newValueDate)) {
            onChange(event, value, new Date(newValueDate));
        }
        else {
            onChange(event, value);
        }
    };
    const onInputBlur = (event) => {
        setTextInputFocused(false);
        const newValueDate = dateParse(value);
        const dateIsValid = (0, datetimeUtils_1.isValidDate)(newValueDate);
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
            if ((0, datetimeUtils_1.isValidDate)(valueDate)) {
                applyValidators(valueDate);
            }
            else {
                setErrorText(invalidFormatText);
            }
        }
    };
    (0, react_1.useImperativeHandle)(ref, () => ({
        setCalendarOpen: (isOpen) => setPopoverOpen(isOpen),
        toggleCalendar: (setOpen) => {
            setPopoverOpen((prev) => (setOpen !== undefined ? setOpen : !prev));
        },
        isCalendarOpen: popoverOpen
    }), [setPopoverOpen, popoverOpen, selectOpen]);
    const createFocusSelectorString = (modifierClass) => `.${calendar_month_1.default.calendarMonthDatesCell}.${modifierClass} .${calendar_month_1.default.calendarMonthDate}`;
    const focusSelectorForSelectedDate = createFocusSelectorString(calendar_month_1.default.modifiers.selected);
    const focusSelectorForSelectedEndRangeDate = createFocusSelectorString(`${calendar_month_1.default.modifiers.selected}.${calendar_month_1.default.modifiers.endRange}`);
    const focusSelectorForUnselectedDate = createFocusSelectorString(calendar_month_1.default.modifiers.current);
    /**
     * Returns a CSS selector for a date button element which will receive initial focus after opening calendar popover.
     * In case of a range picker it returns the end date, if it is selected, start date otherwise.
     * In case of a normal datepicker it returns the selected date, if present, today otherwise.
     */
    const getElementSelectorToFocus = () => {
        if ((0, datetimeUtils_1.isValidDate)(valueDate) && (0, datetimeUtils_1.isValidDate)(rangeStart)) {
            return focusSelectorForSelectedEndRangeDate;
        }
        if ((0, datetimeUtils_1.isValidDate)(valueDate) || (0, datetimeUtils_1.isValidDate)(rangeStart)) {
            return focusSelectorForSelectedDate;
        }
        return focusSelectorForUnselectedDate;
    };
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(date_picker_1.default.datePicker, className), ref: datePickerWrapperRef, style: style }, props),
        React.createElement(Popover_1.Popover, Object.assign({ elementToFocus: getElementSelectorToFocus(), position: "bottom", bodyContent: React.createElement(CalendarMonth_1.CalendarMonth, { date: valueDate, onChange: onDateClick, locale: locale, 
                // Use truthy values of strings
                validators: validators.map((validator) => (date) => !validator(date)), onSelectToggle: (open) => setSelectOpen(open), monthFormat: monthFormat, weekdayFormat: weekdayFormat, longWeekdayFormat: longWeekdayFormat, dayFormat: dayFormat, weekStart: weekStart, rangeStart: rangeStart }), showClose: false, isVisible: popoverOpen, shouldClose: (event, hideFunction) => {
                event = event;
                if (event.key === helpers_1.KeyTypes.Escape && selectOpen) {
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
                if (event.key === helpers_1.KeyTypes.Escape && popoverOpen) {
                    event.stopPropagation();
                }
                return true;
            }, withFocusTrap: true, hasNoPadding: true, hasAutoWidth: true, appendTo: appendTo, triggerRef: triggerRef }, popoverProps),
            React.createElement("div", { className: date_picker_1.default.datePickerInput, ref: triggerRef },
                React.createElement(InputGroup_1.InputGroup, null,
                    React.createElement(InputGroup_1.InputGroupItem, null,
                        React.createElement(TextInput_1.TextInput, Object.assign({ isDisabled: isDisabled, isRequired: requiredDateOptions === null || requiredDateOptions === void 0 ? void 0 : requiredDateOptions.isRequired, "aria-label": ariaLabel, placeholder: placeholder, validated: errorText.trim() ? 'error' : 'default', value: value, onChange: onTextInput, onBlur: onInputBlur, onFocus: () => setTextInputFocused(true), onKeyPress: onKeyPress }, inputProps))),
                    React.createElement(InputGroup_1.InputGroupItem, null,
                        React.createElement("button", { ref: buttonRef, 
                            // TODO: Removed style follow up work with issue #8457
                            className: (0, react_styles_1.css)(button_1.default.button, button_1.default.modifiers.control), "aria-label": buttonAriaLabel, type: "button", onClick: () => setPopoverOpen(!popoverOpen), disabled: isDisabled },
                            React.createElement(outlined_calendar_alt_icon_1.default, null)))))),
        (errorText || helperText) && (React.createElement("div", { className: date_picker_1.default.datePickerHelperText }, errorText ? (React.createElement(HelperText_1.HelperText, null,
            React.createElement(HelperText_1.HelperTextItem, { variant: "error" }, errorText))) : (helperText)))));
};
exports.DatePicker = React.forwardRef(DatePickerBase);
exports.DatePicker.displayName = 'DatePicker';
//# sourceMappingURL=DatePicker.js.map