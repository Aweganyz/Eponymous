import { Link } from 'react-router-dom';
import "../../styles/Profile.css"
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../actions/userActions';
import Header from '../layouts/Header';

export default function Profile () {
    const { user }  = useSelector(state => state.authState);
console.log(user , "userdatas");
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
        <>
<Header />
<div className='Profile'>
    <div className='profileinner'>
        <div className='profilecontent'>
            <h1>Welcome, {user.name}.</h1>
            <p>Montes vitae est aliquam lobortis aliquet. Odio quis porttitor enim curabitur morbi sit cursus. </p>
        </div>
        <hr />


       <div className='profiledatashead'>
       <div className='profiledatas'>
            <div className='ytfdyugih'>
                <h1 className='accde'>Account Details</h1>
                <Link to="/saved"> <h1 id='logout' className='accde'>Saved for Later</h1></Link>
                <h1 onClick={logoutHandler} id='logout1' className='accde'>Log out</h1>
            </div>
            <div className='innerheadprofile'>
                <div className='ytufug'>
                    <p className='paraprof'>{user.name}</p>
                    <Link to="/myprofile/update" ><p className='edit'>Edit <br/>DELETE</p></Link> 
                </div>
                <div className='lineopj'></div>

                <div id='jiojio'>
                    <p className='paraprof'>{user.email}</p>
                    <Link to="/myprofile/update" ><p className='edit'>Edit <br/>DELETE</p></Link> 

                </div>
                <div className='lineopj'></div>

                <div id='jiojio' className='ytufghij'>
                    <p className='paraprof'>{user.telephone}</p>
                    <Link to="/myprofile/update" ><p className='edit'>Edit <br/>DELETE</p></Link> 

                </div>
                <div className='lineopj'></div>
                <h1 onClick={logoutHandler} id='logoutmob' className='accde'>Log out</h1>

            </div>
        </div>
       </div>
    </div>
</div>
        </>
    )
}