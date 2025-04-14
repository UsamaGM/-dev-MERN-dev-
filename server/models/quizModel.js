import mongoose, { SchemaType } from "mongoose";
import {Schema} from mongoose;

const quizSchema = new Schema({
    name: {type: String, required: true},
    questions: {
        type: [{
            question: String,
            options: [String], 
            correctAnswer: String
        }]},
    result: {type: Number}
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;