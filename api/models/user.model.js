import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://tse3.explicit.bing.net/th?id=OIP.ZWkglY4zTe4gYJzS-qAnqAHaHT&pid=Api&P=0&h=180"
      },
}, 
{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;