import 'dotenv/config';
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', userSchema);
