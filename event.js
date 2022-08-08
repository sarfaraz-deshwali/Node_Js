const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('please turn off the moter');
  setTimeout(()=>{
    console.log('please save the water please')
  },3000)
});
myEmitter.emit('waterFull');