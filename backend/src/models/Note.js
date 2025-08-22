import mongoose from 'mongoose';

//1 - create a schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  }, {
    timestamps: true // mongoDB by default will provide createdAt, updatedAt fields
  }
);

//2 - create a model based ot the schema
const Note = new mongoose.model("Note", noteSchema);

export default Note;