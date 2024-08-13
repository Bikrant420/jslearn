function green(name){
    console.log("Hello" + name)
    console.log(`hello ${name}`)
}



function operation(a,b,add,sub,mult){
    let adds=add(a,b);
   let suds= sub(a,b);
   
   let mults= mult(a,b);
   console.log[adds,suds,mults]
}
function add(a,b){
    console.log(a+b);
}
function sub(a,b){
console.log(a-b);
}
function mult(a,b){
    console.log(a*b);
}
operation (20,30,add,sub,mult);   

