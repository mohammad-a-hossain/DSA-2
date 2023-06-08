
// valid anagram 

// if letters are compared to other array lik e abc = a:1 b:2 c:3 cba= abc equal a;1 b:1 :c:1
// find if two array of string are same or not 
// problem

function validAnagram(arr1, arr2){
  if(arr1.length !== arr2.length) return false


  let getObj={}

  for(let i=0; i< arr1.length; i++){
    let letter = arr1[i]
   getObj[letter] ? getObj[letter] += 1: getObj[letter] = 1 
  }
 
  for(let i=0; i < arr2.length; i++){
    let letter= arr2[i]
    if(!getObj[letter]){
      return false
    }else{
      getObj[letter] -= 1
    }
  }
  return true
}


const  result = 
validAnagram('bangladesh','bangladesh')
console.log(result)
const  result1 = 
validAnagram('abc','ac')
console.log(result1)





let = str= 'america'
let obj={}

for(let i =0; i< str.length ; i++){
  if(obj[str[i]] ==undefined){
    obj[str[i]] = 1 
  }else{
    obj[str[i]] += 1 
  }
}
console.log(obj)//{ a: 2, m: 1, e: 1, r: 1, i: 1, c: 1 }





// multi pointer summtion 
function foo(arr){
  for(let i =0; i< arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
         if(arr[i] + arr[j] ===0){ // [2 + -2] =0 
          return [arr[i],arr[j]]
         }
    }
  }

}
const res=foo([2,3,4,0,-2,-3,-4])

console.log(res)// [2,-2]
const res1=foo([4,3,2,0,-2,-3,-4])
console.log(res1)// [2,-2]



function sum(arr){
  let left= 0 
  let right = arr.length -1 
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return arr[left], arr[right]
    }else if(sum > 0){
      right --

    }else{
      left ++
    }
  }
}

console.log(sum([-4,-3,-2,-1,0,1,2,3,44]))

//console.table(sum([-4,-3,-2,-1,0,1,2,5,44]))
