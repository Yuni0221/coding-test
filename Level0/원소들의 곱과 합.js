function solution(num_list) {
  let multiple = 1;
  let sum = 0;

  for (let i = 0; i < num_list.length; i++) {
    multiple *= num_list[i];
  }
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
  }
  return multiple < sum ** 2 ? 1 : 0;
}
