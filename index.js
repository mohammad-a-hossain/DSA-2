
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


const  result = validAnagram('bangladesh','bangladesh')
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





//--------------- find sum of an array's  number by digits like  SUB-ARRAYS  ---------------------------

function findMaxSumofSubArr(arr,num){
  let maxSum =0
  let tempSum= 0
  if(arr.length < num) return null 

  for(let i=0; i < num; i++){
    maxSum  += arr[i]
  }
  maxSum = tempSum 

  for(let i=num; i<arr.length; i ++){
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log( findMaxSumofSubArr([1,2,3,4,5,6],4))





function findMaxSumofSubArr1(arr,num){
  
  var max = -Infinity 
  for(let i= 0; i < arr.length - num + 1; i++){
     temp =0 
    for(let j=0; j < num; j++){
      temp += arr[i + j]
    }
    if(temp > max) max = temp
  }
  return max
}
console.log( findMaxSumofSubArr1([1,2,3,4,5,6],4))
