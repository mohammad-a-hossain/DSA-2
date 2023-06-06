function validAnagram(arr1,arr2){

    // add whatever parameters you deem necessary - good luck!
    if(arr1.length !== arr2.length) return false
    arr1= arr1.toLowerCase()
    arr2 = arr2.toLowerCase()
 
    const charObj = {};
    for(let i=0 ;i<arr1.length;i++){
      charObj[arr1[i]]=  charObj[arr1[i]]+1 || 1;
        }
    for (let i = 0; i < arr2.length; i++) {
          if(!charObj[arr2[i]]){
             return false
          }else {
          charObj[arr1[i]]=charObj[arr1[i]]--
          }
         }
    return true
  }
  

   console.log(validAnagram('texttwisttime', 'timetwisttext') );