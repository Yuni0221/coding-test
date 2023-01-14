function solution(n) {
  var newArray = n.toString().split('')
  var desOrder = newArray.sort((a, b) => b - a)
  
  return Number(desOrder.join(''))
} 

// 문자열을 숫자로 변환해주는 것 => Number 씌워주면 된당..