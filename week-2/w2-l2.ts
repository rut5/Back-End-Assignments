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

const eatFruit = (fruit: Fruit) => {

    console.log("You ate an " + fruit)
}
eatFruit("apple");
eatFruit("orange");
// eatFruit("banana");

// 1-3
type Result = boolean;

const printResult = (result: Result) => {
    if (result === true) {
        console.log("Pass")
    } else if (result === false) {
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
    console.log(`The book ${book.title} has ${book.pages} pages`)
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
    console.log(`
Name: ${schoolteacher.name},
Subject: ${schoolteacher.subject},
ID: ${schoolteacher.id},
Email: ${schoolteacher.email}`);
}

printTeacherInfo({
    name: "Lars",
    subject: "Samhällskunskap",
    id: 5,
    email: "lars@gmail.com"
});

// 2-3
interface Car {
    brand: string;
    year: number;
}

const printCar = (car: Car) => {
    console.log(`
Brand: ${car.brand},
Year: ${car.year}`)
}
printCar({
    brand: "Fiat",
    year: 1975,
}) // fiat 500 cinquecento in greeN B-)


// Enums (fixed list of options) 

// 3-1
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

const showColor = (chosenColor: Color) => {
    if (chosenColor === Color.Blue) {
        console.log("You chose Blue")
    } else if (chosenColor === Color.Green) {
        console.log("You chose Green")
    } else if (chosenColor === Color.Red) {
        console.log("You chose Red")
    }
}
showColor(Color.Blue);

// 3-2
enum PizzaSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

const orderPizza  = (chosenPizza: PizzaSize) => {
    if (chosenPizza === PizzaSize.Small) {
        console.log("You ordered a small pizza")
    } else if (chosenPizza === PizzaSize.Medium) {
        console.log("You ordered a medium pizza")
    } else if (chosenPizza === PizzaSize.Large) {
        console.log("You ordered a large pizza")
    }
}
orderPizza(PizzaSize.Medium);

// 3-3
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

const printRole = (givenRole: Role) => {
    if (givenRole === Role.Admin) {
        console.log("You have full access")
    } else if (givenRole === Role.User) {
        console.log("You have limited access")
    } else if (givenRole === Role.Guest) {
        console.log("You have guest access")
    }
}
printRole(Role.User);


// EXTRA PRACTICE

enum Weekday {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday",
}

const isWeekend = (day: Weekday) => {
    if (day === Weekday.Saturday || day === Weekday.Sunday ) {
        console.log("Yay! It's the weekend!")
    } else {
        console.log("Not the weekend yet ;-(")
    }
}
isWeekend(Weekday.Tuesday);
isWeekend(Weekday.Saturday);

////

const convertToArray = <T>(input1: T, input2: T): T[] => {
    return [input1, input2];
};
console.log(convertToArray(2, 45));