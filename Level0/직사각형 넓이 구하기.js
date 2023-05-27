function solution(dots) {
  let newDots = dots.sort((a, b) => a[0] - b[0]);

  let x = newDots[2][0] - newDots[0][0];
  let y = newDots[1][1] - newDots[0][1];

  return x * y;
}

// 꼭짓점의 최대값 최소값을 먼저 지정해주면 됨