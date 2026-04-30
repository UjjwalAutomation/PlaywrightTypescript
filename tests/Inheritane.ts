class Car {

    readonly model:string;
    color:string;
    name:string;

    constructor(name:string,model:string, color:string){
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){
        console.log("Car Started...");
    }
    stop(){
        console.log("Car stopped..");
    }

    displayInfo(){
        console.log(`Name: ${this.name} Model: ${this.model} Color: ${this.color} `);
    }
}

// child class

class Honda extends Car{

    year: number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,model,color);
        this.year=year;
    }

    //overriding
    start(){
        console.log("Honda Started..");
    }
//overriding
    stop(){
        console.log("Honda Stopped..");
    }
//new method of Honda class
    yom(){
        console.log(`Year Of manufacturing: ${this.year}`);
    }
    displayInfo(){
        console.log(`Name: ${this.name} Model: ${this.model} Color: ${this.color} Year Of Manufacturing: ${this.year}`);
    }
    setYOM(year:number){
        this.year=year;
    }
}

class Toyota extends Car{

    year: number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,model,color);
        this.year=year;
    }

    //overriding
    start(){
        console.log("Toyota Started..");
    }
//overriding
    stop(){
        console.log("Toyota Stopped..");
    }
//new method of Honda class
    yom(){
        console.log(`Year Of manufacturing: ${this.year}`);
    }
    
   
}

let hondaCar = new Honda("Honda City","Silver","Top Model",2025);
hondaCar.displayInfo();
hondaCar.setYOM(2026);
hondaCar.displayInfo();
hondaCar.start();

let car:Car = new Honda("Fortuner","Black","Sigma",2026);
car.displayInfo();
car.yom();