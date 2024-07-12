const marvel_heroes = ["Ironman", "Captain America" , "Hulk", "Thor"]
const dc_heroes = ["Superman", "Batman", "Flash", "Wonder Woman"]

// marvel_heroes.push(dc_heroes)

const superhero = marvel_heroes.concat(dc_heroes)
// console.log(superhero)

// const spread_hero = [...marvel_heroes, ...dc_heroes]
// console.log(spread_hero)

// const another_array = [1,2,3,4,[4,4,2,5],[7,9,1,[4,7,1]]]
// console.log(another_array.flat(Infinity))

// console.log(Array.from("12344"))

// superhero.forEach((element)=>{
//     console.log(element)
// })

// for of loop
// for (let i of superhero) {
//     console.log(`for of Loop: ${i}`);
// }

// // for in loop
// console.log("For in Loop")
// for (let i in superhero) {
//     console.log(`for in Loop: ${superhero[i]}`);
// }

// destructuring
// const [a,b,c,d,...rest] = superhero;
// console.log(a,b,c,d,rest)

// let {a,b} = {a:1, b:2};
// console.log(a,b)

var a = [1,2,3,4,5]
var b ={
    name: "ritik"
}

var c = [...a, ...(b.name)]
console.log(c)