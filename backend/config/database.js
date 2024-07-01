const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://finance:hqQrz8KcSqP2omsG@cluster0.qlvjsic.mongodb.net/databaseone", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB is connected to the host: ${con.connection.host} `)
    })
}

module.exports = connectDatabase;