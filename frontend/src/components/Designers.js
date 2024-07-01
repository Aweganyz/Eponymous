import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import "../styles/Designers.css"
import ProductSearch from "./product/ProductSearch";
import Search from "./layouts/Search";
import Header from "./layouts/Header";
export default function Designers() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage))
    }, [error, dispatch, currentPage])


    return (
        <Fragment>   

             <MetaData title={'Designers'} />
            <Header />
            <div className='headerlogin'>
                <div className='innerlogin'>HOME/ ALL DESINGERS</div>

            </div>

            <ProductSearch />

            {loading ? <Loader /> :
                <>

                    <div className="productitteams">
                        <div className="innerproductiteam">


                            <div className="productiteamone">

{/* <Search /> */}
                                {products && products.map(product => (
                                    <>

                                        <Product key={product._id} product={product} />

                                    </>
                                ))}
                            </div>

                            {/* {productsCount > 0 && productsCount > resPerPage ?
                                <div className="d-flex justify-content-center mt-5">
                                    <Pagination
                                        activePage={currentPage}
                                        onChange={setCurrentPageNo}
                                        totalItemsCount={productsCount}
                                        itemsCountPerPage={resPerPage}
                                        nextPageText={'Next'}
                                        firstPageText={'First'}
                                        lastPageText={'Last'}
                                        itemClass={'page-item'}
                                        linkClass={'page-link'}
                                    />
                                </div> : null} */}
                        </div>
                    </div>
                </>
            }
        </Fragment>
    )
}