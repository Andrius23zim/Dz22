let num = +prompt(`enter the number X ?`); 
let degree = +prompt(`enter the degree?`); 
 
function pow(x, n) { 
  if(n > 1) {
    return (num * pow(x, n - 1));
  } else {
    return x;
  }
} 
 
console.log(pow(num, degree));