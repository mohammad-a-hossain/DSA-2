
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




