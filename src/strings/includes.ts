import { isString } from "@src/check"
import { normalizedStringValue } from "./normalizedStringValue"

export const includes = (stringValue: string, value: string): boolean => {
    return isString(stringValue) && isString(value) ?  normalizedStringValue(stringValue).includes(normalizedStringValue(value)) : false
}