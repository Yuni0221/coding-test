function solution(a, b) {
  let sum = 0;
  
  for (let i = 0; i < a.length; i++) {
      sum += a[i] * b[i]
  }
  return sum
}

// reduce로 푸는 것 연습해야하는데..