function solution(i, j, k) {
  var array = [];
  var count = 0;

  for (let n = i; n <= j; n++) {
    array.push(n);
  }
  array
    .join("")
    .split("")
    .map((a) => (a == k ? count++ : 0));
  return count;
}

// array.push(n) 까지 했는데 count를 해주기 전에 join('').split('') 함수를 쓰는 것이 관건이당
