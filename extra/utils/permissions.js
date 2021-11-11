export default function hasPermission ( moduleName, role,  permissionsType) {
   
    if (moduleName == 'getUsers' && role == 'head-trainer'){
        return true;
    }
        else if (moduleName == 'getUsers' && role == 'trainer' && (permissionsType == "read" || permissionsType == "write")) {
        return true;
    }
    else if (moduleName == 'getUsers' && role == 'trainee' && permissionsType =='read'){
        return true;
    }
    else{
        return false;
    }        
}
