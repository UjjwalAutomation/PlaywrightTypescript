let nae:string ="Ujjwal";
console.log(nae)

function add(num1:number,num2:number): number{

    return num1+num2;

}
console.log(add(2,3));
console.log(add(2,6));
console.log(add(8,6));

function displayDetails(id:number,name:string ,email?:string):void{

    console.log("ID: ",id);
    console.log("Name",name);

    if(email!=undefined){
        console.log("Email: ",email);
    }
}

displayDetails(123,"Ujjwal","ujjwal.kumar@gmail.com")
//console.log(displayDetails(123,"Ujjwal"))