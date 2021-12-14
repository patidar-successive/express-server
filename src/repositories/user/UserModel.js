import mongoose from 'mongoose';
import {UserSchema} from './UserSchema';
import bcrypt from 'bcrypt';
import autoincrement from 'mongoose-auto-increment';
autoincrement.initialize(mongoose.connection);
UserSchema.plugin(autoincrement.plugin,'user');
UserSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt();
        const hasPassword = await bcrypt.hash(this.password,salt);
        this.password = hasPassword;
        next();
    }
    catch(err) {
        next(err);
    }
})
const user = mongoose.model('user', UserSchema);
export default user;
