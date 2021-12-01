const validationHandler = (config) => (req, res, next) =>{
    const errMsg = [];
    let flag = false;

    for (const key in config) {
        flag = false;
        const dataPlace = config[key].in;
        const input = req[dataPlace][key];
        for (const keyProperty in config[key]) 
        {
        switch (keyProperty) {
            case 'required':
                if ((key in req[dataPlace]) && input !== null) {
                    break;
                    }
                else {
                    errMsg.push(`${key} is required`);
                    flag = true;
                    }
                    break;
            case 'string':
                if ((key in req[dataPlace]) && typeof input === 'string') {
                    break;
                    }
                    else {
                    errMsg.push(`${key} is required string`);
                    flag = true;
                    }
                    break;
            case 'regex':
                if(typeof input != 'undefined'){
                    let result = /^[a-zA-Z ]+$/.test(input);
                    console.log(result);
                    if(result == true)
                    break;
                else {
                    errMsg.push(`${key} Name must be in alphabets only`);
                    flag = true;
                    }
                }
        }
    }
}
console.log(errMsg);
next();
}
        
export default validationHandler;