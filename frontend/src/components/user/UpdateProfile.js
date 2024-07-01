import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { updateProfile, clearAuthError } from "../../actions/userActions";
import { clearUpdateProfile } from "../../slices/authSlice";
import Header from "../layouts/Header";

export default function UpdateProfile () {
    const {  error, user, isUpdated } = useSelector(state => state.authState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, settelephone] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();


    const submitHandler  = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('telephone', telephone);
        formData.append('password', password);
        dispatch(updateProfile(formData))
    }

    useEffect(() => {
        if(user) {
            setName(user.name);
            setEmail(user.email);
        }

        if(isUpdated) {
            toast('Profile updated successfully',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearUpdateProfile())
            })
            return;
        }

        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[user, isUpdated, error, dispatch])

    return (  
   <>
   <Header />
    <div className="updatemain">
        <div className="jhfi7yug">
            <form onSubmit={submitHandler} className="" encType='multipart/form-data'>
                <h1 className="foegetpass">Update Profile</h1>


                <div className="form-group">
                {/* <label htmlFor="email_field">Name</label> */}
                <input name='name' placeholder='Name'  value={name}  onChange={e=>setName(e.target.value)} type="name" id="name_field" className="form-control" />
            </div>
            <div className="form-group">
                {/* <label htmlFor="email_field">Email</label> */}
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    placeholder='Email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    className="form-control"
                  
                />
                </div>

                <div className="form-group">
                {/* <label htmlFor="email_field">Telephone</label> */}
                <input
                    type="text"
                    id="text_field"
                    name='telephone' 
                    placeholder='Telephone'
                    value={telephone}
                    onChange={e=>settelephone(e.target.value)}
                    className="form-control"
                  
                />
                </div>

                <div className="form-group">
                {/* <label htmlFor="password_field">Password</label> */}
                <input
                    name='password' 
                    value={password}
                    onChange={e=>setpassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                    id="password_field"
                    className="form-control"
                  
                />
                </div>

           
                <button type="submit" className="updagvyghv" >Update</button>
            </form>
        </div>
    </div>
   </>
    )
}