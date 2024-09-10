import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to database');
})
.catch((error) =>{
    console.log(error);
})

const app = express();
app.use(express.json());

app.listen(8000,() =>{
    console.log('Server is running on port 8000');
})



app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);


// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
