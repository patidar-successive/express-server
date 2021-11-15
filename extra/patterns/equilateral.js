export default function equilateral(){
let size = 10;
let equilateral = "";
for (let row = 1; row <= size; row++) { 
  for (let col = 1; col <= size - row; col++) {
    equilateral += " ";
  }
  for (let star = 0; star <  row; star++) {
    equilateral += "* ";
  }
  equilateral += "\n";
}
console.log(equilateral);
}
