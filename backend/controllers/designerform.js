const catchAsyncError = require('../middlewares/catchAsyncError');
const Form = require('../models/DesignerForm');
const sendToken = require('../utils/jwt');

//DesignerForm - /api/v1/register
exports.DesignerForm = catchAsyncError(async (req, res, next) => {
    const {name, label, company,typeofcompany,Established,gst, phone,headoffice,website,retail,offretail } = req.body

    let avatar;
    
    let BASE_URL = process.env.BACKEND_URL;
    if(process.env.NODE_ENV === "production"){
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }

    if(req.file){
        avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`
    }

    const desingers = await Form.create({
        name,
        label,
        company,
        typeofcompany,
        Established,
        gst,
        phone,
        headoffice,
        website,
        retail,
        offretail,
        avatar
    });

    res.json(desingers)


})

