#!/usr/bin/env node
export let text = 'Welcome to ES6 Module';
export let text2 = 'Welcome to ES6 ';
export function setText(txt) {
    text = txt;
}

//
export { text as message };
