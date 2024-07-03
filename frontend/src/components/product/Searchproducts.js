import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Loader from ".././layouts/Loader";
import MetaData from ".././layouts/MetaData";
import Product from ".././product/Product";
import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Header from "../layouts/Header";
import ProductSearch from "./ProductSearch";

export  default function Searchproducts(){
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1,1000]);
    const [priceChanged, setPriceChanged] = useState(price);
    const [category, setCategory] = useState(null);
    const [rating, setRating] = useState(0);

    const { keyword } = useParams();

// console.log(productsCount > 0 , "products");
    useEffect(()=>{
        if(error) {
            return toast.error(error,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(keyword, priceChanged, category, rating, currentPage)) 
    }, [error, dispatch, currentPage, keyword, priceChanged, category, rating])


    return (
        <Fragment>
     

        <div>
        <MetaData title={'Designers'} />
           <Header />
            <div className='headerlogin'>
                <div className='innerlogin'>HOME/ ALL DESINGERS</div>

            </div>

            <ProductSearch />
    
                   {
                    productsCount > 0  ?  <div className="productitteams">
                    <div className="innerproductiteam">


                        <div className="productiteamone">

                            {/* <Search /> */}
                            {products && products.map(product => (
                                <>

                                    <Product key={product._id} product={product} />

                                </>
                            ))}
                        </div>
                    </div>
                </div> : <div className="rtyfhgjv">{keyword} is Not Found</div>
                   }

        </div>
        </Fragment>
    )
}