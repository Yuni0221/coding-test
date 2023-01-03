function solution(my_string, n) {
  var repeatArray = '';
  for (let i = 0; i < my_string.length; i++) {
    repeatArray += my_string[i].repeat(n);
  }
  return repeatArray;
}