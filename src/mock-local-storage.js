/*
created this file to bypass jest test in authActions.test.js which do not knows what is localstorage.
*/

let localStorage = {};

export default {
    setItem(key, value) {
        return Object.assign(localStorage, {[key]: value});
    },
    getItem(key) {
        return localStorage[key];
    },
    clear() {
        localStorage = {};
    }
};