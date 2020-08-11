const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	type: {type: String, required: true},
	author: {type: String, required: true},
	isbn_code: {type: String, required: true}
});
mongoose.model('Book', bookSchema);