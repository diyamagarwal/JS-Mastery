// 1. Named Export: Exporting constants and functions by their specific names.
export const SITE_NAME = "JS-Mastery";

export function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`.toUpperCase();
}

// 2. Default Export: Exporting a single, primary value from the module.
// This function will be the main takeaway when the module is imported.
export default function multiply(a, b) {
    console.log(`Calculating ${a} * ${b}`);
    return a * b;
}