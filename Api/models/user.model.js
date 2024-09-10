import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required :true,
        unique : true,
    },
    email :{
        type : String,
        required :true,
        unique : true,
    },
    password:{
        type : String,
        required :true,
    },
    avatar:{
        type : String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB1i2NGc8_POphHK7KD75QW4KSqcYr6vgBtHtLj_zmn40xApoyM7ErufbFQ&s"
    },
    
},{timestamps:true}
)

const User = mongoose.model('User',userSchema);

export default User;
