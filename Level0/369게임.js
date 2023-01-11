function solution(order) {
  var answer = 0;
  var stringArray = order.toString();
  
  for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] % 3 == 0 && stringArray[i] !== '0') {
          answer++;
      } 
  }
  return answer;
}

// 0을 3으로 나누어도 나머지가 0이기 때문에 '0'을 제외하는 코드도 입력해줘야한다 
