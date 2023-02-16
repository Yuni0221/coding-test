function solution(numbers, k) {
  let length = numbers.length;
  return numbers[(2 * (k - 1)) % length];
}

// 잘 이해가 안되는 문제..
