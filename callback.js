const greet=(callback)=>{
return callback
}
const callbackFunction=(name)=>{
    return`hello &(name) ,how are you?`;
}
let result=greet(callbackFunction(`john`));
console.log(result);
