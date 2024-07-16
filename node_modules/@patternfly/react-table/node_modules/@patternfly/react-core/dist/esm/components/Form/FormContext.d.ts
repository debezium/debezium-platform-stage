import React, { Dispatch, SetStateAction } from 'react';
export interface FormContextProps {
    /** Record of values for all fieldIds */
    values: Record<string, string>;
    /** Record of errors for all fieldIds */
    errors: Record<string, string>;
    /** Record of touched state for all fieldIds */
    touched: Record<string, boolean>;
    /** Flag to determine the overall validity. True if the record of errors is empty. */
    isValid: boolean;
    /** Get the value for a given fieldId */
    getValue(fieldId: string): string;
    /** Set the value for a given fieldId */
    setValue(fieldId: string, value: string): void;
    /** Set multiple values within the managed record of values */
    setValues: Dispatch<SetStateAction<Record<string, string>>>;
    /** Get the error message for a given fieldId */
    getError(fieldId: string): string;
    /** Set the error message for a given fieldId */
    setError(fieldId: string, error: string | undefined): void;
    /** Set multiple errors within the managed record of errors */
    setErrors: Dispatch<SetStateAction<Record<string, string>>>;
    /** Used to determine touched state for a given fieldId */
    isTouched(fieldId: string): boolean;
    /** Used to update the touched state for a given fieldId */
    setTouched(fieldId: string, isTouched: boolean): void;
    /** Triggers all fieldId-specific validators */
    validate(): Record<string, string | null>;
    /** Set a validator for a specific fieldId */
    setValidator(fieldId: string, validate: (value: string) => string | null): void;
}
export declare const FormContextConsumer: React.Consumer<FormContextProps>;
export interface FormContextProviderProps {
    /** Record of initial values */
    initialValues?: Record<string, string>;
    /** Any react node. Can optionally use render function to return context props. */
    children?: React.ReactNode | ((props: FormContextProps) => React.ReactNode);
}
export declare const FormContextProvider: React.FC<FormContextProviderProps>;
export declare const useFormContext: () => FormContextProps;
//# sourceMappingURL=FormContext.d.ts.map