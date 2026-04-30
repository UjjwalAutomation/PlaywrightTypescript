// Approach 1: Using leterals

let names:string[]=[];

names[0]="Ujjwal";
names[1]="Ram";
names[2]="Shayam";
names[3]="Mohan";

console.log(names);

// Approach 2: Using the generic Array<T> type

// for similar data type, i.e: string
let languageNames:Array<String>=["Java","Java script","Python","C#"];

console.log(languageNames);

let data:Array<string | number>=["Ujjwal",90,"Ram",100,"Shayam",99];

console.log(data);

let mixedData:Array<any> = [1,3,"Ujjwal",true,5.7];
console.log(mixedData);
console.log(mixedData[3]===false);

// Iterating using for in loop 

for(let i in mixedData){
    //console.log(mixedData[i]);
}

// Iterating using for of loop 
// it gives the value of the array same as for each in java
for(let value of mixedData){
    console.log(value);
}
