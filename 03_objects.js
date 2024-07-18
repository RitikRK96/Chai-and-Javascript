// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

/*const a = {
    1: 'a',
    2: 'b',
}
const b = {
    3: 'a',
    4: 'b',
}

const c = Object.assign({}, a,b)
console.log(c);*/

// error  console.log(...a,...b)


// function Person(first, last){
//     this.first = first;
//     this.last = last;
// }

// Person.prototype.nationality = function(){
//     return this.first + " " + this.last;
// }

// const firstPerson = new Person("ritik", "Kumar")
// console.log(firstPerson.nationality())


// Assign Function
const person1 = {
    first: "Ritik",
    last: "Kumar",
    age: 20,
    hero: true
};
const person2 = {
    first: "Tingu",
    last: "Ray",
    age: 21,
    eye: "red"
}
// const all = Object.assign( person1, person2);
// console.log(person1)

// const person3 = { ...person1, ...person2 }
// console.log(person3)

// const users_array = [
//     { id: 1, name: "ritik" },
//     { id: 2, name: "Tingu" },
//     { id: 3, name: "Monty" },
//     { id: 4, name: "Bakasur" },
// ];

// console.log(users_array[1].name)

// const tinderUser = []
// tinderUser.id = 1;
// tinderUser.name = "nahiPata";
// tinderUser.isloggedIn = false;

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// const course = {
//     name: "JavaScript",
//     level: "intermediate",
//     duration: 3,
//     instructor: "Ritik"
// }
// const {instructor: ins} = course;
// console.log(ins);

// const navbar = ({ level }) => {
//     console.log(level)
// }

// navbar(course)