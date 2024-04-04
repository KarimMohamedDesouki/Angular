//#region class
class Person {
    constructor(name = "person name", age = 0) {
        this.name = name;
        this.age = age;
    }
    walking() {
        return (`hi from ${this.name} and i am walking`);
    }
    running() {
        return (`hi from ${this.name} and i am running`);
    }
    jugging() {
        return (`hi from ${this.name} and i am jugging`);
    }
}
//#endregion
//#region extends
class Employee extends Person {
    constructor(name = "Default", age = 0) { super(name, age); } //gets data from the main class
}
//#endregion
//#region  abstract class
// we cant create instance from the abstract we just extend from it and we should override its function
class Aperson {
    walking() {
    }
    ;
}
class person1 extends Aperson {
    walking() {
        return "hello";
    }
    running() {
        return "hello";
    }
}
class person2 {
    running() {
        throw new Error("Method not implemented.");
    }
    walking() {
        throw new Error("Method not implemented.");
    }
}
//#endregion
let per1 = new Person(); //Default constructor
let per2 = new Person("karim mohamed", 20); //parametrized constructor
let per3 = new Person("ahmad galaal", 30); //parametrized constructor 
let emp1 = new Employee();
let emp2 = new Employee("Yousef", 30);
let emp3 = new Employee("AmrKhaled", 30);
