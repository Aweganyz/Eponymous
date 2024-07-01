const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter name']
    },
    label : {
        type: String,
        required: [true, 'Please enter label']
    },
    company : {
        type: String,
        required: [true, 'Please enter company']
    },
    typeofcompany : {
        type: String,
        required: [true, 'Please enter typeofcompany']
    },
    Established : {
        type: String,
        required: [true, 'Please enter Established']
    },
    gst : {
        type: String,
        required: [true, 'Please enter gst']
    },
    phone : {
        type: String,
        required: [true, 'Please enter phone']
    },
    headoffice : {
        type: String,
        required: [true, 'Please enter headoffice']
    },
    website : {
        type: String,
        required: [true, 'Please enter website']
    },
    retail : {
        type: String,
        required: [true, 'Please enter retail']
    },
    offretail : {
        type: String,
        required: [true, 'Please enter offretail']
    },
    avatar: {
        type: String
    },

})


let model =  mongoose.model('Form', userSchema);


module.exports = model;