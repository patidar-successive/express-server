export default function diamond(){
let size = 5;
    let diamond = "";
    for (let row = 1; row <= size; row++) {
      for (let col = size; col > row; col--) {
        diamond += " ";
      }
       
      for (let space = 0; space < row; space++) {
        diamond += "* ";
      }
      diamond += "\n";
    }
    
    for (let row = 0; row <= size - 1 ; row++) {
      for (let col = 0; col < row; col++) {
        diamond += " ";
      }
      for (let space = (size - row); space > 0; space--) {
        diamond += "* ";
      }
      diamond += "\n";
    }
    console.log(diamond);
  }
