pyramid(5,'fullpyramid')
function pyramid(row,type){
    if(type=='halfpyramid'){
        let n = row; 
    let string = "";
       
        for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
       string += j+ ' ';
  }
  string += "\n";
}

console.log(string);

    }
    else if(type == 'fullpyramid'){
        let n = row;
            let str = "";
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= n - i; j++) {
                    str += "  ";
                }
                let str1 = i;
                let str2 = 2*i-2;
                for (let k = 1; k <= 2 * i - 1; k++) {
                    if(k<=i){
                        str += `${str1} `;
                        str1+=1;
                    }
                    else{
                        str+=`${str2} `;
                        str2 = str2-1;
                    }
                }
                str += "\n";
            }
            console.log(str);
    }

    else if(type=='diffPyramid'){
        let n = row; 
    let string = "";
        
        for (let i = 1; i <= n; i++) {
            for (let k = 1; k <= 2*n -1 - i; k++) {
                string +="*";
            }
        for (let j = 1; j <= i; j++) {
       string += j+ '*';
  }
    for(let j=7;j>= i;j--){
    string+="*"
}
    string += "\n";
        }
    
   console.log(string);

    }
        }

