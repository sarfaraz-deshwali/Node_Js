/*const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();*/

/* myEmitter.on('waterFull', () => {
  console.log('please turn off the moter');
  setTimeout(()=>{
    console.log('please save the water please')
  },3000)
});*/

/* myEmitter.on('tank',()=>{
console.log('there is a tankk men')
setTimeout(() => {
  console.log('belive me men ')
}, 3000);
})*/

/* myEmitter.on('choti appi',()=>{
  console.log('roti khalo ayan pintu')
  setTimeout(() => {
    console.log('aawa appi')
  }, 2000);
})*/
/*
myEmitter.on('jetalal',()=>{
  console.log('chup hoja sathvi fail')
setTimeout(()=>{
  console.log('ana mana eru ahh ghs heua ')
} ,3000)
})
myEmitter.emit('jetalal');*/

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

  myEmitter.on('jetalal',()=>{
    console.log('papu ji m dukan ja raha hu jai jenendra')
    setTimeout(()=>{
      console.log('thik hai jai jenendra')
    },4000)
  })
  myEmitter.emit('jetalal');