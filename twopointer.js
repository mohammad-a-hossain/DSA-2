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
  