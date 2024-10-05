import mongoose from "mongoose";

//defining schema

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { type: Number, required: true, validate: (value) => value >= 5000 },
})

//model
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel