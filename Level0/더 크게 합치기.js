function solution(a, b) {
  let stringA = parseInt(a.toString() + b.toString());
  let stringB = parseInt(b.toString() + a.toString());

  return stringA > stringB ? stringA : stringB;
}
