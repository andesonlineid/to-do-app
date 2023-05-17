// Check if our browsers support web storage




const storageCheck = function() {
    if(typeof(Storage)) {
        return true;
    }
}

// Implementation ES 6 module export only one value
export default storageCheck;