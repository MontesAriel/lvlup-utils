import { isString } from "@src/check"


export const normalizedStringValue = (stringValue: string): string => {
    if(!isString(stringValue)) return stringValue
    
    return stringValue.trim().toLocaleLowerCase()
    
}