function solution(arr) {
  let answer = []
  
  for (let i = 0; i < arr.length; i++) {
      if (Math.min(...arr) !== arr[i]) {
          answer.push(arr[i])
      } 
  }
  if (arr.length == 1) {
      answer.push(-1)
  }
  return answer;
}