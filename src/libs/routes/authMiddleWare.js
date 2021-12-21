import hasPermission from "../../../extra/utils/permissions";
import {token} from "../../controllers/user/Controller";
import  Jwt  from "jsonwebtoken";
import {secretKey} from "../../controllers/user/Controller";
export let userRole;
    const authMiddleWare = (module,permissionType) => async (req , res, next) => {
       if(typeof token == 'undefined'){
           next({err:"Unauthorised Token",status:403,message:"Invalid Users"})
       }
       else{
            const userInfo = Jwt.verify(token,secretKey);
           let result =  hasPermission('getusers',userInfo.role,'all')
           console.log(result);
           if(result){
            res.status(200).json({message:"login successfuly",status:200,token:token});
           }
           else{
                res.send('do not authorised');
           }
       }
    }
export default authMiddleWare;
