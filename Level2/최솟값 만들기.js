function solution(A,B){
  let answer = 0;
  let arrayA = A.sort((a, b) => a - b)
  let arrayB = B.sort((a, b) => b - a)
  
  for (let i = 0; i < arrayA.length; i++) {
      answer += arrayA[i] * arrayB[i]
  }
  return answer;
}