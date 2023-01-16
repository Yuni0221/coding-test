function solution(n) {
  if (Math.sqrt(n) % 1 == 0) {
      return Math.pow(Math.sqrt(n) + 1, 2)
  } else {
      return -1; 
  }
}

// Math.sqrt () / Math.pow () 함수 활용 => 방법에 대해 잘 알고 있기