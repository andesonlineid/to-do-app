
// Global Scope
// Web storage key
const webStorageKey = "WEB-STORAGE-KEY";
// Create element
const agenda = document.querySelector('.agenda');
const formInputToDo = document.querySelector('#form-input-to-do');
const btnRemoveTask = document.querySelector('.btn-remove-agenda');


class BrowserNotSupportWebStorage extends Error {
    constructor(error) {
        super();
        this.name = "This browser not support web storage feature"
    }
}



// Module ES6 implementation export more than one value
export {agenda,formInputToDo,btnRemoveTask,webStorageKey,BrowserNotSupportWebStorage};
