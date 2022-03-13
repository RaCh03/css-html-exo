var numbers = [1,4,2,6,8,9,12,5]

for (var R=0;i<numbers.length-1;R++){
  for(var C=R+1;j<numbers.length;C++)  {
    if(numbers[R]>numbers[C]){
      var K = numbers[R]
      numbers[R]=numbers[C]
      numbers[C]= K
    }
  }
  
}
console.log( numbers)
