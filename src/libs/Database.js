var mongoose = require('mongoose');
class Database{
    async open(DbUrl){
        let flag;
       flag = mongoose.connect(DbUrl,{ useNewUrlParser: true , useUnifiedTopology: true  })
        .then( ()=> {
            console.log("Conncected successfully")
       return true;
     })
        .catch( (err) => {
            console.log(err);
            return false;
        });
        return flag;
    }
    disconnect(){
        mongoose.connection.close()
    }
}

export default new Database;