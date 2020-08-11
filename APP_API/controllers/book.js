const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const getBooks = function (req, res) {
  Book.find().exec(function(err, bookdata) {
	if (err) {
		res
		.status(404)
		.json(err);
	return;
	}
	res
	.status(200) 
	.json(bookdata); 
	});
};

const createBook = function (req, res) {
 Book.create({
	 name: req.body.name,
	 type: req.body.type,
	 author: req.body.author,
	 isbn_code: req.body.isbn_code
}, (err, bookdata) => {
	if (err) {
		res
		.status(400)
		.json(err);
	} else {
		res
		.status(201)
		.json(bookdata);
	}
  });
};


const getSingleBook = function (req, res) {
 if (req.params && req.params.bookid) { 
	Book
	.findById(req.params.bookid)
	.exec((err, bookdata) => {
		if (!bookdata) { 
			res 
			.status(404) 
			.json({ 
				"message": "locationid not found" 
			}); 
		return;
		} else if (err) { 
			res 
			.status(404) 
			.json(err); 
		return; 
	}
	res
	.status(200) 
	.json(bookdata); 
	});
} else { 
	res 
	.status(404) 
	.json({ 
		"message": "No locationid in request" 
	}); 
}
};

const updateBook = function (req, res) {
	if (!req.params.bookid) {
		res
		.status(404)
		.json({
			"message": "Not found, bookid is required"
		});
	return;
	}	
	Book.findById(req.params.bookid)
		.exec((err, bookdata) => {
			if (!bookdata) {
				res
			.json(404)
			.status({
				"message": "bookid not found"
			});
			return;
		} else if (err) {
			res
			.status(400)
			.json(err);
			return;
		}
		bookdata.name = req.body.name;
		bookdata.type = req.body.type;
		bookdata.save((err, bookdata) => {
			if (err) {
				res
				.status(404)
				.json(err);
			} else {
				res
				.status(200)
				.json(bookdata);
			}
		});
	}
	);
};
		

const deleteBook = function (req, res) {

 const bookid = req.params.bookid;
 
 if (bookid) {
	Book
	.findByIdAndRemove(bookid) 
	.exec((err, bookdata) => { 
	if (err) {
		res
		.status(404) 
		.json(err); 
	return;
	}
 res
 .status(204)  
 .json(null);
 });
 } else {
	 res
	 .status(404)
	 .json({"message" : "No bookid"});
}};



 module.exports = {
 getBooks,
 createBook,
 getSingleBook,
 updateBook,
 deleteBook
};