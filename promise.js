const  promise=new Promise( (resolve,reject) => {
let age=20;
if(age >= 18){
    resolve("you are eligible for voting");
}else{
    reject("you are not eligible for voting");
}
});




promise.then(
    (data)=>{
        console.log(data);
    }).
catch ((err)=>{
    console.log(err);
});





