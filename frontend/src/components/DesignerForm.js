import React, { useState } from 'react'
import "../styles/Login.css"
import {useDispatch, useSelector } from 'react-redux'
import { designers } from '../actions/desiner';
import { toast } from "react-toastify";
import Header from './layouts/Header';

function DesignerForm() {
    const [userData, setUserData] = useState({
        name: "",
        label: "",
        company: "",
        typeofcompany: "",
        Established: "",
        gst: "",
        phone: "",
        headoffice: "",
        website: "",
        retail: "",
        offretail: "",

    });
    // console.log(userData , "datas");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");
    console.log(avatarPreview.length > 0 ? "surya" : "" , "datas");
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { loading, error, isAuthenticated } = useSelector(state => state.authState)
    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
            }


            reader.readAsDataURL(e.target.files[0])
        } else {
            setUserData({ ...userData, [e.target.name]: e.target.value })
        }
    }
    const submitHandler = (e) => {
        // console.log(userData.name , "jhk");
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('label', userData.label)
        formData.append('company', userData.company);
        formData.append('typeofcompany', userData.typeofcompany)
        formData.append('Established', userData.Established);
        formData.append('gst', userData.gst);
        formData.append('phone', userData.phone);
        formData.append('headoffice', userData.headoffice);
        formData.append('website', userData.website);
        formData.append('retail', userData.retail);
        formData.append('offretail', userData.offretail);
        formData.append('avatar', avatar);

        console.log(typeof (formData));
        dispatch(designers(formData))

        toast('Saved succesfully',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER
        })
    }

    return (
        <>
        <Header />
            <div className='headerlogindf'>
                <div className='innerlogin'></div>
            </div>


            <div className="wrapper">

                <div className='wrapperinner2'>

                    <div className='loginleftr' >
                        <h1 id='accoutn' className='shadow-lgReg'>Join Us</h1>
                        <p className='pararegiste'>Montes vitae est aliquam lobortis aliquet. Odio
                            <br />quis porttitor enim curabitur morbi sit cursus.  </p>

                        <h1 className='helpf' id='accoutn'>FAQ</h1>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
        
                            <div class="accordion-item" id="Acco">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button
                                        class="accordion-button  collapsed"
                                        id="Acco1"
                                        type="button"                
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Montes vitae est aliquam lobortis aliquet.
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    class="accordion-collapse collapse "
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body" id="boduiui">
                                        <div className="innerbod">
                                            <div>
                                                We believe that a well-crafted strategy is the
                                                cornerstone of business success. Our expert
                                                consultants collaborate closely with you to develop
                                                strategies
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="Acco">
                                <h2 class="accordion-header" id="flush-headingOnen">
                                    <button
                                        class="accordion-button  collapsed"
                                        id="Acco1"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOnen"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOnen"
                                    >
                                        Montes vitae est aliquam lobortis aliquet.
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOnen"
                                    class="accordion-collapse collapse "
                                    aria-labelledby="flush-headingOnen"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body" id="boduiui">
                                        <div className="innerbod">
                                            <div>
                                                We believe that a well-crafted strategy is the
                                                cornerstone of business success. Our expert
                                                consultants collaborate closely with you to develop
                                                strategies
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="Acco">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button
                                        class="accordion-button collapsed"
                                        id="Acco1"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Montes vitae est aliquam lobortis aliquet.
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body" id="boduiui">
                                        <div className="innerbod">
                                            <div>
                                                We believe that a well-crafted strategy is the
                                                cornerstone of business success. Our expert
                                                consultants collaborate closely with you to develop
                                                strategies
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item" id="Accolast">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button
                                        class="accordion-button collapsed"
                                        id="Acco1"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Montes vitae est aliquam lobortis aliquet.
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body" id="boduiui">
                                        <div className="innerbod">
                                            <div>
                                                We believe that a well-crafted strategy is the
                                                cornerstone of business success. Our expert
                                                consultants collaborate closely with you to develop
                                                strategies
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <h1 className='help' id='accoutn'>Need Help?</h1>
                        <p className='pararegiste1'>
                            Montes vitae est aliquam lobortis aliquet. Odio
                            <br /> quis porttitor enim curabitur morbi sit cursus.
                        </p>

                        <div className='contactsu'>
                            <p className='imagephone'><img  src='/images/phone.svg' />+91 98000 98000</p>
                            <p className='imagephone'><img src='/images/mail.svg' />Rufus81@yahoo.com</p>
                        </div>

                    </div>





                    <div className='loginleftr' id='leftid'>
                        <div className='linelogin' id='liop'>

                        </div>
                        {/* <h1 className='shadow-lgReg'>Register Now</h1> */}
                        <form onSubmit={submitHandler} className="shadow-lg1" encType='multipart/form-data'>
                            {/* <h1 className="mb-3">Register</h1> */}

                            <div className="form-group">
                                {/* <label htmlFor="email_field">Name</label> */}
                                <input name='name' onChange={onChange} placeholder='Name*' type="name" id="name_field" className="form-control" />
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="email_field">Email</label> */}
                                <input
                                    type="text"
                                    id="text_field"
                                    name='label'
                                    onChange={onChange}
                                    placeholder='Name of the label*'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    onChange={onChange}
                                    name='company'
                                    placeholder='Name of the Company*'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    onChange={onChange}
                                    name='typeofcompany'
                                    placeholder='Type of the company*'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group" id='jgfyu'>
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    onChange={onChange}
                                    name='Established'
                                    placeholder='Established Date*'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                                <input
                                    type="text"
                                    id="text_field"
                                    name='gst'
                                    onChange={onChange}
                                    placeholder='GST Registration'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    onChange={onChange}
                                    name='phone'
                                    placeholder='Official Phone number'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    onChange={onChange}
                                    name='headoffice'
                                    placeholder='Head Office Full Address'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    name='website'
                                    onChange={onChange}
                                    placeholder='Website'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email_field">Telephone</label> */}
                                <input
                                    type="text"
                                    id="text"
                                    name='retail'
                                    onChange={onChange}
                                    placeholder='Online Retail Stores Links'
                                    //    onChange={onChange}
                                    className="form-control"

                                />
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="password_field">Password</label> */}
                                <input

                                    name='offretail'
                                    //    onChange={onChange}
                                    type="text"
                                    onChange={onChange}
                                    placeholder='Offline Retail Stores Addresses'
                                    id="text"
                                    className="form-control"

                                />
                            </div>
                          
                            <div className="form-group">
                                <label for="file-upload" class="custom-file-upload">
                                    <p>Photos of the Latest Collection</p>
                                    <p>(Risus odio ut faucibus pellentesque enim aliquet et. Platea volutpat aliquam.)</p>
                                </label>
                                <input id="file-upload" name='avatar' onChange={onChange} type="file" />
                            </div>

<div>
    {
        avatarPreview.length > 0 ? <div className='uploaded'>Uploaded*</div> : "" 
    }
</div>

                            <button
                                id="register_button"
                                type="submit"
                                className="btnlogin"
                            //    disabled={loading}
                            >
                                CREATE A DESIGNERS PROFILE
                            </button>
                        </form>
                    </div>

                </div>
            </div>



        </>
    )
}

export default DesignerForm
