const fs = require('fs')
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data)
})

let text = fs.readFileSync("file.txt","utf-8")
let new_text = text.replace('help' , 'kick')
console.log(new_text)


let txt = fs.readFileSync("file.txt","utf-8")
let nw_txt = text.replace('okkK!','dum')
console.log(nw_txt)
 

let tt = fs.readFileSync('file.txt','utf-8');
let n_tt = text.replace('help','check');
console.log(n_tt)