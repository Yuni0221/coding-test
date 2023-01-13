function solution(n) {
  var sum = 0; 
  var numberArray = String(n)
  
  for (let i = 0; i < numberArray.length; i++) {
      sum += Number(numberArray[i])
   }
  return sum;
}