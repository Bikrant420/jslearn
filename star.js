/*
let n =5;
let star ="";
for(let i=5; i>=1; i--){
    for (let j=1; j<=n-i; j++){
        star+="";
    }
    for(let k=1; k<=2*i-1; k++)
        star +="*";

    star = star + '\n'
}
    console.log (star);
*/
    let n =5;
    let star ="";
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n+2; j++){
            if (i==1 || i==n||j==1|| j==n+2){
                star +="*";
            } 
            else {
                star +=" ";
            }
        }
        star +="\n";
    }
    console.log(star);




    