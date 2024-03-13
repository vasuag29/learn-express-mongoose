var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true, maxLength: 200},
    author: {type: Schema.Types.ObjectId, ref: 'Author' , required: true, maxLength: 100},
    summary: {type: String, maxLength: 500},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);