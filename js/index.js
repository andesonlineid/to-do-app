// Module ES6 import implementation
import {agenda,formInputToDo,btnRemoveTask,BrowserNotSupportWebStorage} from './config.js';
import storageCheck from './functions.js';

let taskToday = [];

window.addEventListener('load',() => {
    
    // Error handling using custome error (child of class Error)

    try {
    
    // Local Scope
    if(storageCheck()) {
       
        if(localStorage.getItem("WEB-STORAGE-KEY") === null) {
            // put and convert array to JSON string
            localStorage.setItem("WEB-STORAGE-KEY",JSON.stringify(taskToday));
        } else {
            // parse string JSON to array
            const dataTaskToday = JSON.parse(localStorage.getItem("WEB-STORAGE-KEY"));
           
            taskToday = [...dataTaskToday];


            // Error handling using Instance of operator 
            try {

        // Create and adding element to agenda 
            // Implementation functional programming (higher order function)   
       
            if(taskToday.length >= 5) {

                agenda.style.overflow = "scroll";

                taskToday.forEach((currentValue,index) => {
                    const taskContent  = document.createElement('h3');
                    taskContent.innerText = `${index+1}. ${currentValue}`;
                    agenda.appendChild(taskContent);
                })
            } else {
       
            taskToday.forEach((currentValue,index) => {
                    const taskContent  = document.createElement('h1');
                    taskContent.innerText = `${index+1}. ${currentValue}`;
                    agenda.appendChild(taskContent);
                })
         
            }

        } catch(error) {
                if(error instanceof SyntaxError) {
                    console.log(`Error adding element: ${error.message}`);
                } else if(error instanceof ReferenceError) {
                    console.log(`Error adding element: ${error.message}`);
                } else {
                    console.log(`Error adding element: ${error.stack}`);
                }

        }


        }
    }

    if(!storageCheck()) {
        throw new BrowserNotSupportWebStorage('Browser not support web storage');
    }

} catch {
    if(error instanceof SyntaxError) {
        console.log(`Web storage check syntax error: ${error.message}`);
        // Custom error
    } else if(error instanceof BrowserNotSupportWebStorage) {
        console.log(`Browser not support web storage: ${error.message}`);
    } else if(error instanceof ReferenceError) {
        console.log(`Web storage check refference error: ${error.message}`);
    } else {
        console.log(error.stack);
    }
}


});

    
        formInputToDo.addEventListener('submit',(event) => {

            const inputTask = document.querySelector('.input-to-do').value;
            taskToday.push(inputTask);

            
            // Error handling using throw operator
            try {

            if(localStorage.getItem("WEB-STORAGE-KEY") !== null) {
                localStorage.setItem("WEB-STORAGE-KEY",JSON.stringify(taskToday));
            }   

            if(localStorage.getItem === null) {
                throw new SyntaxError("Web Storage === null");
            }

            } catch(error) {
                console.log(`Save button error: ${error.message}`);
            }
});
      


btnRemoveTask.addEventListener('click',function() {

    if(localStorage.getItem("WEB-STORAGE-KEY") === null) {
        localStorage.setItem("WEB-STORAGE-KEY",JSON.stringify(taskToday));
    } else {
        localStorage.removeItem("WEB-STORAGE-KEY");
        window.location.reload();
    }

});



