import { Fragment, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productActions"
import Loader from '../layouts/Loader';
import MetaData from "../layouts/MetaData";
import "../../styles/Designers.css"
import { toast } from "react-toastify";
import { addCartItem } from "../../actions/cartActions";
import Header from "../layouts/Header";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [third, setthird] = useState(["Profile"])
  const [state, setstate] = useState({
    title: "Profile",
    des: "one",
    firstpara: "Aliquam feugiat velit mauris dolor hendrerit. Integer fames et enim tortor. Ultricies interdum tempus aliquam consequat enim id elementum nulla. Mauris orci quisque risus nulla praesent tincidunt lectus. Scelerisque lorem platea dui ut lacinia amet convallis sodales dignissim. Id sem enim consectetur viverra viverra turpis. Mattis velit convallis morbi maecenas penatibus. ",
    secondpara: "Ut nulla nibh sed maecenas ante in. Nisi fames cursus etiam viverra. Lectus morbi molestie lobortis libero id natoque. Faucibus cras sit ut diam libero donec in est egestas.",
    thirdpara: "At et sed sit viverra feugiat sodales maecenas gravida. Ipsum risus laoreet phasellus tellus condimentum scelerisque sed fermentum. Tortor aliquam."
  })
  const genius = useRef()


  const { loading, product = {} } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams()

  const datas = [
    {
      title: "Profile",
      des: "one",
      firstpara: "Aliquam feugiat velit mauris dolor hendrerit. Integer fames et enim tortor. Ultricies interdum tempus aliquam consequat enim id elementum nulla. Mauris orci quisque risus nulla praesent tincidunt lectus. Scelerisque lorem platea dui ut lacinia amet convallis sodales dignissim. Id sem enim consectetur viverra viverra turpis. Mattis velit convallis morbi maecenas penatibus. ",
      secondpara: "Ut nulla nibh sed maecenas ante in. Nisi fames cursus etiam viverra. Lectus morbi molestie lobortis libero id natoque. Faucibus cras sit ut diam libero donec in est egestas.",
      thirdpara: "At et sed sit viverra feugiat sodales maecenas gravida. Ipsum risus laoreet phasellus tellus condimentum scelerisque sed fermentum. Tortor aliquam."
    },
    {
      title: "Specialisation",
      des: "two",
      firstpara: "Specialisation 01",
      secondpara: "Specialisation 02",
      thirdpara: "Specialisation 03"

    },
    {
      title: "Occasion",
      des: "three",
      firstpara: "Occasion 01",
      secondpara: "Occasion 02",
      thirdpara: "Occasion 03"
    },
    {
      title: "Category",
      des: "three",
      firstpara: "Category 01",
      secondpara: "Category 02",
      thirdpara: "Category 03"
    },
    {
      title: "Stores",
      des: "four",
      firstpara: "Online Store",
      secondpara: "Offline Store",
      // thirdpara : "Category 03",
      fouthpara: "Lacus vitae lorem sit ipsum ",
      fithpara: "Lacus vitae lorem sit ipsum "

    },
    {
      title: "Gallery",
      des: "five"
    }

  ];

  const clikeddatas = (datas) => {
    setstate(datas);
    genius.current.classList.remove("ytfjg")

  };

  useEffect(() => {

    if (!product._id) {
      dispatch(getProduct(id))
    }


  }, [dispatch, id, product._id])



  return (
    <>
    <Header />
      {loading ? <Loader /> :
        <>
          <MetaData title={product.name} />
          <div className='headerlogin'>
            <div className='innerlogin'>HOME/DESIGNERS/NAME SURENAME</div>
          </div>
          <div className="innerlogin22" id="sidecontent">HOME/DESIGNERS/NAME SURENAME</div>

          <div className="save">
              <button type="button" id="cart_btn" 
                     disabled={product.stock==0?true:false} 
                     onClick={()=>{
                        dispatch(addCartItem(product._id, quantity))
                        toast('Saved succesfully',{
                            type: 'success',
                            position: toast.POSITION.BOTTOM_CENTER
                        })
                    }}
                     className="hgfctuyc"
                     ></button>
                <img className="sharevh" src="/images/share.svg" alt="share" />
          

              </div>
          <div className="Singledesginerpage">

            <div className="innersingle">
            
              <div className="headingsingle">
                <div className="yuf7i" id="mobileok">
                  <h1 className="namesin">{product.name}</h1>
                  <p className="namepara">Quis non id sapien</p>
                </div>
                <div className="yuf7iimage">
                  <div className="imagesingke">
                    <img src="/images/sig.svg" alt="Surya" />
                  </div>
                </div>

                <div className="yuf7i" id="mobileokmob">
                  <h1 className="namesin">{product.name}</h1>
                  <p className="namepara">Quis non id sapien</p>
                </div>

                <div className="yuf7i" id="lgiuoh">
                  <div className="lgiuoh">
                    <div>
                    Head Office
                    <p id="tfiyug">Mumbai</p>
                    </div>
                  </div>
                  <div className="lgiuoh">
                    <div>
                    Established in
                    <p id="tfiyug">2014</p>
                    </div>
                  </div>
                  <div>
                    <p>Lacus vitae lorem sit ipsum eget
                      <br /> magna pellentesque imperdiet. </p>
                  </div>
                </div>

              </div>

              <div className="linoppp"></div>



              <div className="tyyfvytf">
                <div className="innersta">
                  {datas.map((iteam) => {
                    let spanClass = third.includes(iteam.title) ? 'spanlist' : 'fro';

                    return (
                      <>
                        <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                          {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
                          <input type='text' className={spanClass} value={iteam.title} onClick={(e) => setthird(e.target.value)} readOnly />

                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="innerright">
                  {
                    state.title === "Profile" ? <div>
                      <p>{state.firstpara}</p>
                
                      <p className="hgcvyg">{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Specialisation" ? <div>
                      <p>{state.firstpara}</p>
                      <p>{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Occasion" ? <div>
                      <p>{state.firstpara}</p>
                      <p>{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Category" ? <div>
                      <p>{state.firstpara}</p>
                      <p>{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Stores" ? <div className="innerright2">
                      <div className="leftnj1">
                        <p className="ordersl"><b>{state.firstpara}</b></p>
                        <div className="line"></div>
                        <div className="yug">
                          <img src="/images/s.svg" />
                          <img src="/images/s2.svg" />
                          <img src="/images/s3.svg" />
                        </div>
                      </div>
                      <div className="midline"></div>
                      <div className="leftnj">
                        <p className="ordersl"><b>{state.secondpara}</b></p>
                        <div className="line"></div>
                        <p className="yugfhb" id="address"><b>Address 01:</b></p>
                        <p className="yugfhb">{state.fouthpara} </p>
                        <p className="yugfhb" id="address"><b>Address 02:</b></p>
                        <p className="yugfhb">{state.fithpara}</p>
                      </div>
                    </div> : ""
                  }


                  {
                    state.title === "Gallery" ? <div className="hyjhtigu">
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />
                      <img src="/images/g.svg" />

                    </div> : ""
                  }


                </div>

                
              </div>
              <div className="linoppp"></div>

            </div>

          </div>


        </>}
    </>
  )
}
