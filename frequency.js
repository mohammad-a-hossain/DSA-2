// let a string has some char find the frequency of the char

let str='bangladesh'

let findChar ={}

for(let i=0; i < str.length; i++){
    if(findChar[str[i]] === undefined){
        findChar[str[i]]= 1
    }else{
        findChar[str[i]] += 1
    }
}
console.log(findChar)//{ b: 1, a: 2, n: 1, g: 1, l: 1, d: 1, e: 1, s: 1, h: 1 }



const arrstrr = ["a", "b", "c", "d", "e", "f", "g","a","c", "h", "i", "j", "k", "l", "m", "n"];

const redFreq= arrstrr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr] ++
    }else{
        acc[curr] =1
    }

    return acc
 },{})

 console.log(redFreq);
//  {
//     a: 2,
//     b: 1,
//     c: 2,
//     d: 1,
//     e: 1,
//     f: 1,
//     g: 1,
//     h: 1,
//     i: 1,
//     j: 1,
//     k: 1,
//     l: 1,
//     m: 1,
//     n: 1
//   }
