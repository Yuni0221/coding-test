function solution(num_list, n) {
  let answer = [];

  while (num_list.length) {
    //num_list의 길이만큼 돈다
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

// answer을 빈 배열로 만들어주고 또 Push 해주면 2차원 배열이 되는구나..
