function solution(age) {
  let ageArr = age.toString().split('')
  let answer = '';

  let alphabet = ['a','b','c','d','e','f','g','h','i','j']
  
  for (let i = 0; i < ageArr.length; i++) {
      answer += alphabet[ageArr[i]]
  }
  return answer;
}

//간단한 문제인데 어렵게 생각하지 말기로해