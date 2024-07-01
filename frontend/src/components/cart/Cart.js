import { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import {removeItemFromCart } from '../../slices/cartSlice';
import Header from '../layouts/Header';

export default function Cart() {
    const {items } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    // const navigate = useNavigate();
// console.log(items , "vcyt");
    // const increaseQty = (item) => {
    //     const count = item.quantity;
    //     if(item.stock ==0 ||  count >= item.stock) return;
    //     dispatch(increaseCartItemQty(item.product))
    // }
    // const decreaseQty = (item) => {
    //     const count = item.quantity;
    //     if(count == 1) return;
    //     dispatch(decreaseCartItemQty(item.product))
    // }

    // const checkoutHandler = () =>{
    //     navigate('/login?redirect=shipping')
    // }


    return (
        <Fragment>
            <Header />
            {items.length==0 ? 
              <div className='jtf7iyub'>
                <div className='innercard' id='jyhghb'>
                Saved items is Empty
                </div>
              </div>
                 :
                <Fragment>
                     <div className='jtf7iyub'>
                <div className='innercard' id='jyhghb'>
                Saved : <b>{items.length} items</b>

                <div id="uygh">
                <div className="producgug">
                    <div className="datasprodu">
                            {items.map(item => (
                                <Fragment key={item.product}>

                            <img
                                className="imageprod"
                                src={item.image}
                                alt={item.name}
                            />
                        <div className="datsprogu">
                            <div>
                                <p>{item.description}</p>
                                <h5 >
                                    <Link to={`/alldesigners/${item._id}`}>{item.name}</Link>
                                </h5>
                                {/* <div className='lineprodict'></div> */}
                                <p >{item.seller}</p>
                                {/* <div className='lineprodict'></div> */}

                                <div className='onelastview'>
                                <Link to={`/alldesigners/${item.product}`} className="view_btn"><p>View Products<img id='imageslop' src='/images/arrow.svg' /></p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="remove">
                    <div onClick={() => dispatch(removeItemFromCart(item.product))} >Remove</div>
                                            </div>
                                </Fragment>

                                
                                )
                            )
                            }

                         
                            {/* <hr /> */}
                        </div>

                       
                    </div>
                    </div>
                </div>
              </div>
                     
                </Fragment>
            }
           
        </Fragment>
    )
}