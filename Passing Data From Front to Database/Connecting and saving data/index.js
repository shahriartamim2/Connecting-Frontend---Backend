import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const Schema = mongoose.Schema;
const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const uri = 'mongodb+srv://shahriartamim:shahriartamim@testdata.sze1xj5.mongodb.net/?retryWrites=true&w=majority&appName=TestData';

const userSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

const  connectToDatabase = async()=> {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err; // Rethrow error to handle it in the route
    }
}

connectToDatabase();

// app.get('/', async (req, res) => {
//     try {
//         await connectToDatabase();
//         res.send('Connected to MongoDB successfully');
//     } catch (err) {
//         res.status(500).send('Failed to connect to MongoDB');
//     }
// });

app.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            age : req.body.age
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send({
            message : "Saving error"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});