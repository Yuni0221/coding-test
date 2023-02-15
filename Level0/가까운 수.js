function solution(array, n) {
  var arr = array.sort((a, b) => a - b).map(a => Math.abs(a - n));
  return array[arr.indexOf(Math.min(...arr))];
}