
export default function pyramid(row,type){
    if(type=='halfpyramid'){
        let halfpyramid = row; 
    let pyramid = "";
       
        for (let row = 1; row <= halfpyramid; row++) {
        for (let col = 1; col <= row; col++) {
            pyramid += col+ ' ';
  }
  pyramid += "\n";
}

console.log(pyramid);

    }
    else if(type == 'fullpyramid'){
        let fullpyramid = row;
            let pyramid = "";
            for (let row = 1; row <= fullpyramid; row++) {
                for (let col = 1; col <= fullpyramid - row; col++) {
                    pyramid += "  ";
                }
                let str1 = row;
                let str2 = 2*row-2;
                for (let k = 1; k <= 2 * row - 1; k++) {
                    if(k<=row){
                        pyramid += `${str1} `;
                        str1+=1;
                    }
                    else{
                        pyramid+=`${str2} `;
                        str2 = str2-1;
                    }
                }
                pyramid += "\n";
            }
            console.log(pyramid);
    }

    else if(type=='diffPyramid'){
        let diffPyramid = row; 
    let pyramid = "";
        
        for (let row = 1; row <= diffPyramid; row++) {
            for (let star = 1; star <= 2*diffPyramid -1 - row; star++) {
                pyramid +="*";
            }
        for (let col = 1; col <= row; col++) {
            pyramid += j+ '*';
  }
    for(let col=7;col>= row;col--){
        pyramid+="*"
}
pyramid += "\n";
        }
    
   console.log(pyramid);

    }
        }
