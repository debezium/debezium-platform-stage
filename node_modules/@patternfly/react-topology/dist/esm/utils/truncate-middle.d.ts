export interface TruncateOptions {
    length?: number;
    truncateEnd?: boolean;
    omission?: string;
    minTruncateChars?: number;
}
export declare const truncateMiddle: (text: string, options?: TruncateOptions) => string;
export declare const shouldTruncate: (text: string, options?: TruncateOptions) => boolean;
//# sourceMappingURL=truncate-middle.d.ts.map