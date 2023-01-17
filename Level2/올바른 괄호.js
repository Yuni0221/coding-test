function solution(s){
  var count = 0
  if (s[0] === ')' || s.length == 1) return false; 
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          count++
      } else {
          count--
          if (count < 0) return false;
      }
  } 
  return count == 0 ? true : false;
}
