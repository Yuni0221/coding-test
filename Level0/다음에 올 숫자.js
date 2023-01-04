function solution(common) {
  for (let i = 0; i < common.length; i++) {
    if ((common[1] - common[0]) == (common[2] - common[1])) {
      return common[common.length - 1] + (common[1] - common[0]);
    } else if ((common[1] / common[0] == common[2] / common[1])) {
      return common[common.length - 1] * (common[1] / common[0]);
    }
  }
}