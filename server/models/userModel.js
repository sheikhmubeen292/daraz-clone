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

// export const schema = model.schema;
export default userModel;
// export default mongoose.model("users", userSchema);

//converting password into hash
// userSchema.pre("save", async function( next){
//   if(this.isModified("password")){
//     console.log(`the current password,${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(`the current password is ${this.password} `);
//     this.confirmedpassword = undefined;
//   }
//   next();
// })
 
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const userSchema = new mongoose.Schema({
//         name: {
//           type: String,
//           required: true
//         },
//         email: {
//           type: String,
//           required: true
//         },
//         password: {
//           type: String,
//           required: true
//         },
//         role: {
//           type: String,
//           default: 'user',
//             enum: ["user", "superadmin", "admin"]
//         },
//         // tokens:[{
//         //   token:{
//         //     type: String,
//         //   required: true
//         //   }
//         // }]
// }, {timestamps:true,})
//generating tokens
// userSchema.methods.generateAuthToken = async function(){
//     try {
//       const token = jwt.sign({_id:this._id.toString()}, "mynameisahsanmalikiamselfmade");
//       this.tokens = this.tokens.concat({token:token})
//       console.log(token,"token")
//       await this.save()
//       return token
//     } catch (error) {
//       console.log(error, "error")
//     }
// }


// module.exports = mongoose.model("users", userSchema);
