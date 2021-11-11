import {ValidateEmail} from './helpers';
export default function validateuser(users){
    const valid =[];
    const invalid =[];
    let res = [];
    let userlen = users.length;
    for(var i=0; i<userlen;i++){
        res = ValidateEmail(users[i]);
        if (res == "true"){
            valid.push(users[i]);
        }
        else{
            invalid.push(users[i]);
        }
    }
    console.log(`these email valid = ${valid}` );
    console.log(`these email invalid = ${invalid}` );
    var valid_user = valid.length;
    var invlaid_user = invalid.length;
    console.log(`number of valid user= ${valid_user}` );
    console.log(`number of invalid user= ${invlaid_user}` );
}
