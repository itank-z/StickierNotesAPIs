const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Note = new Schema({
    userId: { type: String, required: true, },
    type: { type: String, required: true, },
    title: { type: String },
    description: { type: String, },
    content: { type: String, required: true, },
}, { timestamps: true });

const NotesModel = mongoose.model('Note', Note);

module.exports = NotesModel;
