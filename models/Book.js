const { model, Schema } = require('mongoose')


const Book = new Schema({
    title: String,
    authors: [ String ],
    // authors: [{type: String,}],
    description: String, 
    image: String,
    link: String
})

module.exports = model('Book', Book)