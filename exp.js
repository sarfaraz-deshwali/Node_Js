// filter use ----->  //

// const arr = [2,3,4,5,3,4,6,5,4]
// // console.log(arr)
// let result = arr.filter((item)=>{
//        return item===3
// })
// console.log(result)

// let result1 = arr.filter((item)=>{
//    return item >2
// })
// console.log(result1)

// file add or remove with the help of if and input ----->  //

// const fs = require('fs')
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('invalid input')
// }


//help of fs module and loop create multipal file in one folder  ------>    //

const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,'file');

// for(i=0; i<5; i++) {
//    fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple txt file hello"+i+".txt") 
// }
 
// for remove all file in folder -----> //

// for(i=0; i<5; i++) {
//     fs.unlinkSync(dirpath+"/hello"+i+".txt","a simple txt file hello"+i+".txt") 
//  }
 
// print file from dierectory or folder  ---->  // 
fs.readdir(dirpath,(err,file)=>{
    file.forEach((item) => {
        console.log("file name is ",item)
    });
})