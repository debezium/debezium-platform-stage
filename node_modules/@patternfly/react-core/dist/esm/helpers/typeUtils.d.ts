/// <reference types="react" />
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? never : K;
}[keyof T];
export type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? K : never;
}[keyof T];
export type PickOptional<T> = Pick<T, OptionalKeys<T>>;
export type PickAndRequireOptional<T> = Required<Pick<T, OptionalKeys<T>>>;
export type DropEvent = React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event;
//# sourceMappingURL=typeUtils.d.ts.map