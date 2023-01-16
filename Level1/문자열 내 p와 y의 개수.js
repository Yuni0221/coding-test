function solution(s){
  var newArray = s.toLowerCase()
 
  var pBox = 0;
  var yBox = 0;
  var answer = 0;
  
  for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] == 'p') {
          pBox++;
      } else if (newArray[i] == 'y') {
          yBox++;
      } 
  }
  return pBox.length != 0 && yBox.length != 0 && pBox == yBox
}

// for 문을 빠져나와서 다시 if 문을 돌려야 한다는것