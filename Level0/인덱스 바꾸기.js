function solution(my_string, num1, num2) {
  let newString = [...my_string];
  newString.splice(num1, 1, my_string[num2]);
  newString.splice(num2, 1, my_string[num1]);
  return newString.join("");
}
