export default function hasPermission ( moduleName, role,  permissionsType) {
       if (moduleName == 'getUsers') {
        if (role == 'head-trainer'){
               return true;
           }  else if ( role == 'trainer' && (permissionsType == "read" || permissionsType == "write")) {
               return true;
           }
           else if (role == 'trainee' && permissionsType =='read'){
                return true;
           }
       } else {
                return false;
    }        
}
