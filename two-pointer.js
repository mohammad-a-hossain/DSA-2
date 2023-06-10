// Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.


function findPair(arr,N,X){

    for(let i=0; i< arr.length-1;i++){
        for( let j=i+1; j < arr.length; j ++){
            if(i == j) continue 

            if(arr[i] + arr[j] ==X){
                return 1
            }
            if(arr[i] + arr[j] >X){
                break
            }


        }
    }
    return 0

}
const result= findPair([1,2,3,4,5], N= 4, X=4)
console.log('result' ,result);



// find the unique value



function uniqueVal(arr){
    var i=0

    for(var j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
         arr[i] = arr[j]
        }
        //console.log(i,j)  
    }
  return i 
}
 console.log( uniqueVal([1,1,2,2,3,3,4,4,5,6,6]))


/*----------------------------- another approach ----------------------- */
 function countUniqueValues(a){
    // add whatever parameters you deem necessary - good luck!
    
    if (a.length === 0) {
      return 0
    }
   
    let left = 0
    let right = 1
    while (right < a.length) {
      if (a[left] === a[right]) {
        right++
      }
   
      if (a[left] !== a[right]) {
        left++
        a[left] = a[right]
        right++
      }
   
      if (right === a.length) {
        return left + 1
      }
    }
   return a.length
  }
 console.log(countUniqueValues([1,1,1,1,1,2]))


