import mongoose, { Schema } from 'mongoose';
import jwt  from "jsonwebtoken";
// const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
       image:{ type: String,required: true},
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
        role: {
          type: String,
          default: 'user',
            enum: ["user", "superadmin", "admin"]
        },
        gender: {
          type: String,
          required: true
        },
        option:{
          type:String,
          required:true
        }
       
}, {timestamps:true,})
//generating tokens
userSchema.methods.generateAuthToken = async function(){
    try {
      const token = jwt.sign({_id:this._id.toString()}, "mynameisahsanmalikiamselfmade");
      this.tokens = this.tokens.concat({token:token})
      console.log(token,"token")
      await this.save()
      return token
    } catch (error) {
      console.log(error, "error")
    }
}
const userModel = mongoose.model('users', userSchema);

export default userModel;

