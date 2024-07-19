// const arr = [1, 2, 3, 4, 5, 6]

// for (const i of arr) {
//     console.log(i);
// }
// Map


// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);
// map.set('country', "USA");
// map.set('address', "Unknown");

// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game': 'First',
//     'player': 'John',
//     'score': 100
// }
// Object is not iterable using forOf loop
// for (const i of myObject) {
//     console.log(i);
// }

// Object is iterable using forIn loop
// for (const key in myObject) {
//     console.log(key, ':-', myObject[key]);
// }

// const coding = ["python", "ruby", "Java", "CPP", "c"];
// coding.forEach((val, index, arr) => {
//     console.log(val, " ", index, " ", arr);
// } )

// const myCoding = [
//     {
//         python: 100,
//         ruby: 200,
//         Java: 300
//     },
//     {
//         python: 400,
//         ruby: 500,
//         Java: 600
//     },
//     {
//         python: 700,
//         ruby: 800,
//         Java: 900
//     }
// ]

// myCoding.forEach((item, value) => {
//     console.log(item, " ", value);
// })

// function printme (item) {
//     console.log(item);
// }
// myCoding.forEach(printme)

// myCoding.forEach((item) => {
//     console.log(item.Java);
// })

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNums.filter((num) => num > 4)
// const newNums2 = myNums.filter((num) => {
//     return num > 4
// })

// console.log(newNums);
// console.log(newNums2);

// const newNum3 = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNum3.push(num);
//     }
// })
// console.log(newNum3);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// // const userBooks = books.filter((bk) => bk.genre === 'History')
// const userBooks2 = books.filter((bk) => {
//     return bk.publish > 1995 && bk.genre === 'History'
// })
// // console.log(userBooks);
// console.log(userBooks2);

// const myNumC = [1, 2, 3, 4, 5, 6];

// const myNumC2 = myNumC.map((num) => {
//     return num + 10;
// })

// console.log(myNumC);
// console.log(myNumC2);

// reduce
const myNums = [1, 2, 3, 4]

const sum = myNums.reduce((acc, cur) => {
    console.log(`Acc: ${acc}, Current: ${cur}`);
    return acc + cur;
}, 0)
console.log(sum);