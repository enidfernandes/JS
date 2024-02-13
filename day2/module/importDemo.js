// you cant export/import 'this' value - it is undefined
// you need to execute them on http/https on live server(extension) - not on normal web browser

// to import all things from exportdemo.js
import * as imported from "./exportDemo.js"

// import {add} from "./exportDemo.js"
// console.log(add(10,10))

console.log("value of pi in import js page = " +imported.PI) //since imorted everything(*) need to include imported also to access PI

console.log("add funciton in import js page : " + imported.add(40,40))


// since both are js files include a html file to use them