import users from '../repositories/user/UserModel';
const bcrypt = require('bcrypt');
export const seed = async (req, res, next) => {
    console.log('Inside Seed Data');
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash('Training@123', salt);
    const user = {
      email: 'ankit@successive.tech',
      name: 'ankit',
      password: hash,
      role: 'head-trainer',
      userId: 'ankit',
    };
      try {
        const count = await users.countDocuments();
        if (count === 0) {
         let data = new users(user);
         try{
             await data.save();
             res.send('seed save successfully..');
         }
         catch(err){
             res.send(err);
         }
        }
        else{
            next();
        }
      } catch (error) {
        console.log('error is created', error);
      }
  };
