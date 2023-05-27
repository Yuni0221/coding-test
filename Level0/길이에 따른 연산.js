function solution(num_list) {
  var list1 = 0;
  var list2 = 1;
  if (num_list.length >= 11) {
    for (let i = 0; i < num_list.length; i++) {
      list1 += num_list[i];
    }
  } else if (num_list.length <= 10) {
    for (let i = 0; i < num_list.length; i++) {
      list2 *= num_list[i];
    }
  }
  return num_list.length >= 11 ? list1 : list2;
}
