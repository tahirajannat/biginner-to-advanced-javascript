#!/usr/bin/env node

import { message, setText, text2 as text } from './es6Modules.js';
console.log(text);
console.log(message);
setText('Welcome to My Module');
console.log(message);
