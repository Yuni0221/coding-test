function solution(order) {
  var answer = 0;
  var stringArray = order.toString();
  
  for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] % 3 == 0) {
          answer++;
      }
  }
  return answer;
}