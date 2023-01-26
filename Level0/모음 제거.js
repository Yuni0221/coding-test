function solution(my_string) {
  let str = 'aeiou'
  let newString = my_string.split('').filter((e)=>(!str.includes(e))).join('')
  return newString
}