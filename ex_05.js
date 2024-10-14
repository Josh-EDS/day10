function getID() { return Math.floor(Math.random() * 10000) } // Generation d'un ID random
function assignID(machineName, newSeed) {
    seed = newSeed;
    return new Promise((resolve) => {
        setTimeout(() => { resolve(`${machineName} : ${getID()}`) }, 500);
    });
}

assignID (" Oxygen filter " , 1) . then ( value => { console . log ( value ) }) ;