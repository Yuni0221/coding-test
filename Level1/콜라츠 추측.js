function solution(num) {
  let answer = 0; 

  while(num != 1) {
    if (num % 2 == 0) {
      num = num /2
    } else {
      num = num * 3 + 1
    }
    answer += 1
  }
  if (answer >= 500) {
    return -1;
  } else {
    return answer;
  }
}

// while 조건문을 사용해야하고, 작업의 반복을 넣어주는 answer = 0 을 먼저 선언해 줬어야 한다