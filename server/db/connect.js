const mongoose = require('mongoose')

const connectDb = url => {
    return mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        console.log('mongodb connected successfully')
    })
}

module.exports = connectDb