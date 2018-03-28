import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxLength: [20, 'Title must be 15 characters long'],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, 'Description must be 200 characters long'],
  },
  todoDate: {
    type: String,
    required: false,
  }
}, { timestamps: true });

export default mongoose.model('todo', todoSchema);