function solution(my_string) {
  let newArr = my_string.split(" ");
  let answer = Number(newArr[0]);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "+") {
      answer += Number(newArr[i + 1]);
    } else if (newArr[i] === "-") {
      answer -= Number(newArr[i + 1]);
    }
  }
  return answer;
}

// 레벨0이지만 제법 어려움.. 우선 split으로 바꾸어줄때 (' ') 공백으로 넣어줘야 하고
// 배열의 요소들을 Number로 감싸 주어야 한다.
