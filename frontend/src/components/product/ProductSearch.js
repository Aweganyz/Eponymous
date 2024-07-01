import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Loader from ".././layouts/Loader";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

export default function ProductSearch() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);
    const [priceChanged, setPriceChanged] = useState(price);
    const [category, setCategory] = useState(null);
    const [seller, setseller] = useState(null);
    const [rating, setRating] = useState(0);
    console.log(seller, "seller");
    const { keyword } = useParams();
    const categories = [
        "male",
        "female"
    ];
    const sellers = [
        "Bengaluru",
        "chennai",
        "ooty"
    ]

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(keyword, priceChanged, category, seller, rating, currentPage))
    }, [error, dispatch, currentPage, keyword, priceChanged, category, seller, rating])


    return (
        <Fragment>

            <div className="productsearch">
                {loading ? <div className="loadersea"><Loader /></div> :
                    <div className="innersearch">
                        <div className="seacrchleft">

                            <div className="innerlogin22">HOME/ ALL DESINGERS</div>
                            <div className="serinnerlef">
                                154 Results in
                            </div>
                            <div className="serariht">

                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button
                                            class="accordion-button  collapsed"
                                            id="uyfgy"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            Gender
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        class="accordion-collapse collapse "
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">
                                            {categories.map(category =>
                                                <>
                                                 <div className="ytrdyfguh">
                                                 <input  type="radio" id={category} name={category} value={category} onClick={() => {
                                                        setCategory(category)
                                                    }} key={category}  />
                                                    <label for={category}> {category}</label><br />
                                                 </div>
                                                </>
                                                // <p style={{
                                                //     cursor: "pointer",
                                                //     listStyleType: "none"
                                                // }}

                                                //     key={category}
                                                //     onClick={() => {
                                                //         setCategory(category)
                                                //     }}>{category}</p>

                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">

                        </div>

                        <div className="secondsearch">

                            <div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingOnen">
                                        <button
                                            class="accordion-button  collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOnen"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOnen"
                                        >
                                            Locations
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOnen"
                                        class="accordion-collapse collapse "
                                        aria-labelledby="flush-headingOnen"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                            {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value={seller} onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}> {seller}</label><br />
                                                  </div>
                                                  </>
                                            )}


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            Occasion
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            Product & Services
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFour"
                                        >
                                            Year of Establishment
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secondsearchMOb">

                            <div className="hytftyiug">
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button
                                            class="accordion-button  collapsed"
                                            id="uyfgy"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            Gender
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        class="accordion-collapse collapse "
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">
                                        {categories.map(category =>
                                                <>
                                                 <div className="ytrdyfguh">
                                                 <input  type="radio" id={category} name={category} value={category} onClick={() => {
                                                        setCategory(category)
                                                    }} key={category}  />
                                                    <label for={category}> {category}</label><br />
                                                 </div>
                                                </>
                                                // <p style={{
                                                //     cursor: "pointer",
                                                //     listStyleType: "none"
                                                // }}

                                                //     key={category}
                                                //     onClick={() => {
                                                //         setCategory(category)
                                                //     }}>{category}</p>

                                            )}

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingOnen">
                                        <button
                                            class="accordion-button  collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOnen"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOnen"
                                        >
                                            Locations
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOnen"
                                        class="accordion-collapse collapse "
                                        aria-labelledby="flush-headingOnen"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value={seller} onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}> {seller}</label><br />
                                                  </div>
                                                  </>
                                            )}



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hytftyiug">
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            Occasion
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">
                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydon"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            Product & Services
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div >
                                <div class="accordion-item" id="hgcuyt1">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button
                                            class="accordion-button collapsed"
                                            id="uyfgydonRED"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFour"
                                        >
                                            Year of Establishment
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body" id="ytry">

                                        {sellers.map(seller =>
                                            <>
                                             
                                                  <div className="ytrdyfguh1">
                                                  <input  type="radio" id={seller} name={seller} value="one" onClick={() => {
                                                         setseller(seller)
                                                     }} key={seller}  />
                                                     <label for={seller}>One</label><br />
                                                  </div>
                                                  </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </Fragment>
    )
}
