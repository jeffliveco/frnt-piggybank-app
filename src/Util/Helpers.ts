import Dictionary from "./Dictionary";

export function isEmpty<T>(object: Dictionary<T>): boolean {
    return Object.keys(object).length === 0;
}