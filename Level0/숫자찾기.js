function solution(num, k) {
  var answer = 0;
  let stringArray = num.toString().split('');
  let discount = 0;
  
  for (let i = 0; i < stringArray.length; i++) {
      if(stringArray[i] == k) {
          return i + 1; 
      } else {
          discount++;
      }
      if (discount ==stringArray.length) {
          return -1;
      }
  }
}

// 배열을 돌 때 첫번째 부터 If 문에 적합하지 않으면 바로 else문으로 돌기 때문에 
// 이중 if 문을 사용하고, else 문에는 임의로 만든 값을 넣어줘야한다 