function solution(price, money, count) {
  let playCount = 0;
  for (let i = 1; i <= count; i++) {
      playCount += i * price
  } if (playCount < money) {
      return 0;
  } else {
      return Math.abs(money - playCount);
  }
}