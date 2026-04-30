// accessing object using approach 1, using . notation


let employee ={
    name:"Ujjwal",
    age:30,
    salary:600,
    job:"Engineer",

    getDetails:function(){
        return `${this.name} is an ${this.job}`;
    }
}

console.log(typeof employee);
console.log( employee.name);
console.log(employee.getDetails());

/// access the object by using bracket []. Approach 2

console.log(employee["name"],employee["age"],employee["getDetails"]());


