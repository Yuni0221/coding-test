function solution(a, b) {
  let stringA = a.toString();
  let stringB = b.toString();

  if (stringA + stringB > 2 * a * b) {
    return parseInt(stringA + stringB);
  } else {
    return parseInt(2 * a * b);
  }
}
