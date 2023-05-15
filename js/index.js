
// Global Scope

// Web storage key
const webStorageKey = "WEB-STORAGE-KEY";
let taskToday = [];

// Get html element using DOM
const agenda = document.querySelector('.agenda');
const formInputToDo = document.querySelector('#form-input-to-do');
const btnRemoveTask = document.querySelector('.btn-remove-agenda');
// Create element




window.addEventListener('load',() => {

    // Local Scope

    if(storageCheck()) {
       
        if(localStorage.getItem("WEB-STORAGE-KEY") === null) {
            // put and convert array to JSON string
            localStorage.setItem("WEB-STORAGE-KEY",JSON.stringify(taskToday));
        } else {
            // parse string JSON to array
            const dataTaskToday = JSON.parse(localStorage.getItem("WEB-STORAGE-KEY"));
          
            taskToday = [...dataTaskToday];
        
            // create and adding element to agenda
            for(let i=0; i < taskToday.length; i++) {
                    const taskContent  = document.createElement('h1');
                    taskContent.innerText = `${i+1}. ${dataTaskToday[i]}`;
                    agenda.appendChild(taskContent);
            }
        }
    }


});


formInputToDo.addEventListener('submit',(event) => {

    const inputTask = document.querySelector('.input-to-do').value;
    taskToday.push(inputTask);
    
    if(localStorage.getItem("WEB-STORAGE-KEY") !== null) {
        localStorage.setItem("WEB-STORAGE-KEY",JSON.stringify(taskToday));
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






// Check if our browsers support web storage
const storageCheck = function() {
    if(typeof(Storage)) {
        return true;
    }
}

