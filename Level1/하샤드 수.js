
function solution(x) {
  var sum = 0;
  
  var numArray = String(x).split('');
  for (let i = 0; i < numArray.length; i++) {
      sum += Number(numArray[i])
  }
  return x % sum == 0 ? true : false;
}

// sum이라는 변수에 배열의 합을 담으려면 Number => 숫자로 바꾸어줘야함 !!
