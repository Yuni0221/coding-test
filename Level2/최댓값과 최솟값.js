function solution(s) {
  let array = s.split(' ')
  let min = Math.min(...array)
  let max = Math.max(...array)
  return [min, max].join(' ')
}