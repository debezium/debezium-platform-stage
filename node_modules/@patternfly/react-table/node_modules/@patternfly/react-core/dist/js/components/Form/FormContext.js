"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormContext = exports.FormContextProvider = exports.FormContextConsumer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const FormContext = react_1.default.createContext({});
exports.FormContextConsumer = FormContext.Consumer;
const FormContextProvider = ({ initialValues, children }) => {
    var _a;
    const [values, setValues] = react_1.default.useState(initialValues || {});
    const [errors, setErrors] = react_1.default.useState({});
    const [validators, setValidators] = react_1.default.useState({});
    const [touched, setTouched] = react_1.default.useState({});
    const isValid = ((_a = Object.keys(errors)) === null || _a === void 0 ? void 0 : _a.length) === 0;
    const getValue = (fieldId) => Object.entries(values).reduce((acc, [id, value]) => (id === fieldId ? value : acc), '');
    const setValue = (fieldId, value, triggerValidation = true) => {
        var _a;
        if (values[fieldId] !== value) {
            setValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [fieldId]: value })));
            triggerValidation && ((_a = validators[fieldId]) === null || _a === void 0 ? void 0 : _a.call(validators, value));
        }
    };
    const getError = (fieldId) => Object.entries(errors).reduce((acc, [id, error]) => (id === fieldId ? error : acc), '');
    const setError = (fieldId, error) => errors[fieldId] !== error &&
        setErrors((_a) => {
            var _b = fieldId, _ = _a[_b], prevErrors = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return (Object.assign(Object.assign({}, prevErrors), (!!error && { [fieldId]: error })));
        });
    const isTouched = (fieldId) => Object.entries(touched).reduce((acc, [id, isTouched]) => (id === fieldId ? isTouched : acc), false);
    const setFieldTouched = (fieldId, isTouched) => touched[fieldId] !== isTouched &&
        setTouched((_a) => {
            var _b = fieldId, _ = _a[_b], prevTouched = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return (Object.assign(Object.assign({}, prevTouched), (isTouched && { [fieldId]: isTouched })));
        });
    const setValidator = (fieldId, validate) => validators[fieldId] !== validate && setValidators((prevValidators) => (Object.assign(Object.assign({}, prevValidators), { [fieldId]: validate })));
    // Accumulate and return errors from all fields with validators.
    const validate = () => {
        var _a;
        return (_a = Object.entries(validators)) === null || _a === void 0 ? void 0 : _a.reduce((acc, [id, validateField]) => {
            const fieldError = validateField(values[id]);
            if (fieldError) {
                acc[id] = fieldError;
            }
            return acc;
        }, {});
    };
    return (react_1.default.createElement(FormContext.Provider, { value: {
            values,
            errors,
            touched,
            isValid,
            setValues,
            setErrors,
            getValue,
            setValue,
            getError,
            setError,
            validate,
            setValidator,
            isTouched,
            setTouched: setFieldTouched
        } }, typeof children === 'function' ? (react_1.default.createElement(FormContext.Consumer, null, (formContext) => children(formContext))) : (children)));
};
exports.FormContextProvider = FormContextProvider;
exports.FormContextProvider.displayName = 'FormContextProvider';
const useFormContext = () => react_1.default.useContext(FormContext);
exports.useFormContext = useFormContext;
//# sourceMappingURL=FormContext.js.map