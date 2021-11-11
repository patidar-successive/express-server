
export default function equilateral(){
let n = 10;
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k <  i; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
}
