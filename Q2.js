function findNumber(arr,target){
    var arr1 = [];
    for(var i=0;i<arr.length;i++){
        for(var j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] == target){
                arr1.push(arr[i],arr[j]);
            }
        }   
    }
  return arr1;
}

var numbers = findNumber([1,2,3],4);
console.log(numbers);
