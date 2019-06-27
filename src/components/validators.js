export const required = value => (value ? undefined : '** Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
export const email = value =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? undefined : 'Must be a valid email address';