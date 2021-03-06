// 401 Unauthorized Redirect
export const UNAUTHORIZED_REDIRECT = 'UNAUTHORIZED_REDIRECT';
 
// 403 Forbidden Redirect
export const FORBIDDEN_REDIRECT = 'FORBIDDEN_REDIRECT';
 
// 404 Not Found Redirect
export const NOT_FOUND_REDIRECT = 'NOT_FOUND_REDIRECT';
 
// 404 Not Found Reset
export const NOT_FOUND_RESET = 'NOT_FOUND_RESET';
 
// 5XX Server Error Redirect
export const SERVER_ERROR_REDIRECT = 'SERVER_ERROR_REDIRECT';
 
// Show alert message
export const SHOW_ALERT_MESSAGE = 'SHOW_ALERT_MESSAGE';

// Show error message
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

// Reset alert message
export const RESET_ALERT_MESSAGE = 'RESET_ALERT_MESSAGE';
export function resetAlertMessage(){
    return{
        type: 'RESET_ALERT_MESSAGE'
    };
};

export const START_EMAIL = 'START_EMAIL';
export function setStartEmail(email){
    return {
        type: 'START_EMAIL',
        email
    };
};

// Show xconfirm message
export const SHOW_CONFIRM_MESSAGE = 'SHOW_CONFIRM_MESSAGE';
export function showConfirmMessage(){
    return{
        type: 'SHOW_CONFIRM_MESSAGE'
    };
};

// Reset confirm message
export const RESET_CONFIRM_MESSAGE = 'RESET_CONFIRM_MESSAGE';
export function resetConfirmMessage(){
    return{
        type: 'RESET_CONFIRM_MESSAGE'
    };
};
