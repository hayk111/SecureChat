export const required = value => value ? undefined : 'required';
export const maxLength = max => value =>
    value && value.length > max ? `must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength50 = maxLength(50);
export const number = value => value && isNaN(Number(value)) ? 'must be a number' : undefined;
export const minValue = min => value =>
    value && value < min ? `must be at least ${min}` : undefined;
export const minValue1 = minValue(1);
export const minValue4 = minValue(4);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
export const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
export const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;