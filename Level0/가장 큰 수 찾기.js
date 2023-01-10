function solution(array) {
  var maxNumber = Math.max(...array)
  return [maxNumber, array.indexOf(maxNumber)]
}