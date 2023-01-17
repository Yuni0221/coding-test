function solution(s) {
  let newArray = s.split('').sort().reverse().join('')   
  return newArray
}

// sort로 정렬한 후에 뒤집으면 된다는 것..