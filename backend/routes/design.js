const express = require('express');
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/designerdatas' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })


const { 
    DesignerForm,
 
 } = require('../controllers/designerform');
const router = express.Router();


router.route('/desiger').post(upload.single('avatar'), DesignerForm);


module.exports = router;