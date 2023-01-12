function solution(numbers) {
  var newArray = numbers.sort((a, b) => b - a);
  
  if (newArray[newArray.length - 1] * newArray[newArray.length - 2] > newArray[0] * newArray[1]) {
      return newArray[newArray.length - 1] * newArray[newArray.length - 2]
  } else return newArray[0] * newArray[1]
}





