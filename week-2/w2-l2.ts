// Union Types

// 1-1
type IDType = number | string;

const showID = (ID: IDType) => {

    console.log("Your ID is " + ID)
}
showID(8);
showID("Rut");

// 1-2
type Fruit = string;

const eatFruit = (Fruit: string) => {

    console.log("You ate an " + Fruit)
}
eatFruit("apple");
eatFruit("orange");
// eatFruit("banana");

// 1-3
type Result = boolean;

const printResult = (Result: boolean) => {
    if (Result === true) {
        console.log("Pass")
    } else if (Result === false) {
        console.log("Fail")
    } else {
        console.log("No result")
    }
}
printResult(true);
printResult(false);


// Interfaces and Type Aliases

// 2-1
interface Book {
    title: string;
    pages: number;
}

const describeBook = (book: Book) => {
    console.log`The book ${book.title} has ${book.pages} pages`
}
describeBook({ title: "Harry Potter", pages: 382 });

// 2-2
interface Teacher {
    name: string;
    subject: string;
}

interface Employee {
    id: number;
    email: string;
}

type SchoolTeacher = Teacher & Employee; 
// you can also write "interface SchoolTeacher extends Teacher, Employee"

const printTeacherInfo = (schoolteacher: SchoolTeacher) => {
    console.log(`Name: ${schoolteacher.name},
        Subject: ${schoolteacher.subject},
        ID: ${schoolteacher.id},
        Email: ${schoolteacher.email}`);
}
printTeacherInfo({
    name: "Lars", 
    subject: "Samhällskunskap", 
    id: 5, 
    email: "lars@gmail.com"});

// 2-3
interface Car {
    brand: string;
    year: number;
}

const printCar = (car: Car) => {
    console.log(`Brand: ${car.brand},
        Year: ${car.year}`)
}
printCar({
    brand: "Fiat",
    year: 1975,
}) // fiat 500 cinquecento in gree B-)


// Enums

// 3-1


/* 3. Enums (fixed list of options) 

Exercise 1: 
Create an enum Color with values: Red, Green, Blue. 
Write a function showColor that prints "You chose Red/Green/Blue". 

 

Exercise 2: 
Create an enum PizzaSize with values: Small, Medium, Large. 
Write a function orderPizza that prints: 
"You ordered a [size] pizza." 

 

Exercise 3: 
Create an enum Role with values: Admin, User, Guest. 
Write a function printRole that checks the role: 

Admin → "You have full access" 

User → "You have limited access" 

Guest → "You have guest access"  */