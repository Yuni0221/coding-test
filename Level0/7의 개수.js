function solution(array) {
  let count = 0;
  let newArr = array.join("").split("");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "7") {
      count++;
    }
  }
  return count;
}
