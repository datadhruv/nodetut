// const number = 12
// if(number>=10){
//     console.log('large number')
// }else{
//     console.log('small number')
// }

// console.log(`hey first node !!!!`)
// console.log(__dirname)
// console.log(__filename)
// var i = 1
// setInterval(()=>{
// console.log('hello',i)
// i=i+1
// },100)
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative')
// require('./7-mind-grenade')
// console.log(data)
// sayHi('abc')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(data.singlePerson.name)
 const l = require('lodash')
 const items = [1,[2,[3,[4,[5]]]]]
 const newItem = l.flattenDeep(items)
 console.log(newItem)