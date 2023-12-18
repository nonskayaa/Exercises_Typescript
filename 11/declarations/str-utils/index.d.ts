type strFunction = (value: string)=> string

declare module 'str-utils' {
    // export function strReverse (value: string): string
    // export function strToLower(value: string): string
    // export function strToUpper(value: string): string
    // export function strRandomize(value: string): string
    // export function strInvertCase(value: string): string

    export const strReverse: strFunction 
    export const strToLower: strFunction 
    export const strToUpper: strFunction 
    export const strRandomize: strFunction 
    export const strInvertCase: strFunction 
}
