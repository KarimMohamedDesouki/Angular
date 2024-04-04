//  class Account

class Account {
    Acc_no: number;
    Balance: number;

    constructor(Acc_no = 1, Balance = 10000) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
        return (`Here is your debitAmount`)
    }
    creditAmount() {
        return (`Here is your creditAmount`)
    }
    getBalance() {
        return (`Here is your getBalance`)
    }
}

// Interface 

interface IAccount{ 
    Date_of_opening: number;

    addCustomer();
    removeCustomer();
}

// Saving_account class 

class Saving_Account extends Account implements IAccount {
    Min_Balance:number;
    Date_of_opening: number;

    constructor(Acc_no=1,Balance=10000) {super(Acc_no,Balance);} //gets data from the main class

    addCustomer(){
        return("Customer added successfully");
    };
    removeCustomer(){
        return("Customer removed successfully");
    };

}

// Current_Account class 

class Current_Account extends Account implements IAccount {
    Intrest_rate:number;
    Date_of_opening: number;

    constructor(Acc_no=1,Balance=10000) {super(Acc_no,Balance);} //gets data from the main class

    addCustomer(){
        return("Customer added successfully");
    };
    removeCustomer(){
        return("Customer removed successfully");
    };

}





//#region class
class Person {
    name: string;
    age: number;

    constructor(name = "person name", age = 0) {
        this.name = name;
        this.age = age;
    }
    walking() {
        return (`hi from ${this.name} and i am walking`)
    }
    running() {
        return (`hi from ${this.name} and i am running`)
    }
    jugging() {
        return (`hi from ${this.name} and i am jugging`)
    }
}

//#endregion

//#region extends

class Employee extends Person {

    constructor(name="Default",age=0) {super(name,age);} //gets data from the main class


}

//#endregion

//#region  abstract class
// we cant create instance from the abstract we just extend from it and we should override its function
abstract class Aperson{
    name: string;
    age: number;
    
    walking(){     //in abstract class we should leave the implementation so the user will override the method

    };

    abstract running(); // in abstract class we should write before a function abstract
}

class person1 extends Aperson{  // if we didnot over ride all the methods in abstract class we will have error
 walking(){
    return "hello"
 }
 running(){
    return "hello"
 }
}

//#endregion

//#region  interface 
//  we cant create instance form interface 
interface Iperson{ 
    name: string;
    age: number;

    running();
    walking();
}

class person2 implements Iperson{
    name: string;
    age: number;
    running() {
        throw new Error("Method not implemented.");
    }
    walking() {
        throw new Error("Method not implemented.");
    }
    

}
//#endregion

//#region testing

let per1 = new Person();//Default constructor
let per2 = new Person("karim mohamed", 20);//parametrized constructor
let per3 = new Person("ahmad galaal", 30);//parametrized constructor 

let emp1 = new Employee();
let emp2 = new Employee("Yousef",30);
let emp3 = new Employee("AmrKhaled",30);

//#endregion

