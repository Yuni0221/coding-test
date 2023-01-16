function solution(before, after) {
  if (before.split("").sort().join("") === after.split("").sort().join("")) {
      return 1;
  } else return 0;
}

// 모든 정렬이 같아야 한다 => sort 사용해서 오름차순으로 정리