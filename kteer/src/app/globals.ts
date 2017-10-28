// dirtyhacks!!!
'use strict';

export function setter(variable, value) {
    if (variable === 'loggedIn') {
        loggedIn = value;
    } else if (variable === 'name') {
        name = value;
    } else if (variable === 'userId') {
        userId = value;
    }
}

export let loggedIn = 'false';
export let name: String = '';
export let userId: String = '';
