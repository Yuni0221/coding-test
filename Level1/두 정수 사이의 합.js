function solution(a, b) {
  var sum = 0;
  
  if ( a < b ) {
      for (let i = a; i <= b; i++) {
          sum += i;
      }
  } else if ( a == b ) {
      return a;
  } else if ( a > b ) { 
      for (let i = a; i >= b; i--) {
          sum += i;
      }
  }
  return sum
}