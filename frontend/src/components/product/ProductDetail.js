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
    firstpara: "Raw Mango draws from the colors, philosophies and cultures of India to create a unique voice, questioning place and perspective through design. With roots in craft and community, Raw Mango’s relationship with handloom began in 2008 as an investigation of possibilities. As a design house it continues to create new conversations in textile and culture through a range of saris, garments and objects. Created with karigars across Rajasthan, Madhya Pradesh, West Bengal and Varanasi, Raw Mango’s designs innovate upon century old skills, in pursuit of defining a new aesthetic vocabulary.",
    secondpara: "Sanjay Garg emerged from an upbringing in the village of Mubarikpur, Rajasthan. As a student of textile design, he developed his unique language in 2008, working in Chanderi, Madhya Pradesh. Garg undertook innovations within the yarn and weaving process to create a new visual vocabulary and weaving interventions which, over a decade later, visually define Chanderi today.",
    thirdpara: "A commitment to experimentation underpins his process, with further explorations in Mashru, Benarasi and Ikat. Always informed by India, Garg constantly engages with established rubric to imagine new possibilities."
  })
  const genius = useRef()


  const { loading, product = {} } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams()
  console.log(product, "ghfchv");
  const datas = [
    {
      title: "Profile",
      des: "one",
      firstpara: "Aliquam feugiat velit mauris dolor hendrerit. Integer fames et enim tortor. Ultricies interdum tempus aliquam consequat enim id elementum nulla. Mauris orci quisque risus nulla praesent tincidunt lectus. Scelerisque lorem platea dui ut lacinia amet convallis sodales dignissim. Id sem enim consectetur viverra viverra turpis. Mattis velit convallis morbi maecenas penatibus. ",
      secondpara: "Ut nulla nibh sed maecenas ante in. Nisi fames cursus etiam viverra. Lectus morbi molestie lobortis libero id natoque. Faucibus cras sit ut diam libero donec in est egestas.",
      thirdpara: "At et sed sit viverra feugiat sodales maecenas gravida. Ipsum risus laoreet phasellus tellus condimentum scelerisque sed fermentum. Tortor aliquam.",
      fourpara: "- Formal events"

    },
    {
      title: "Specialisation",
      des: "two",
      firstpara: " Raw Mango focuses on handwoven textiles, particularly Chanderi, Mashru, and Brocade.",
      secondpara: " The brand offers a wide range of clothing for women, including sarees, lehengas, dresses, and separates",
      thirdpara: " Raw Mango also has a line of accessories like scarves, stoles, and bags.",
      fourpara: " The brand has recently expanded into home décor, with a collection of textiles and tableware."

    },
    {
      title: "Occasion",
      des: "three",
      firstpara: "- Everyday wear",
      secondpara: "- Festive wear",
      thirdpara: "- Wedding wear",
      fourpara: "- Formal events"
    },
    {
      title: "Category",
      des: "three",
      firstpara: "- Women's clothing (saris, dresses, separates)",
      secondpara: "- Accessories (stoles, scarves, jewelry)",
      thirdpara: "- Home décor (bed linens, cushions)",
      fourpara: "- Formal events"

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
            <div className='innerlogin'>HOME/DESIGNERS/NAME SURNAME</div>
          </div>
          <div className="innerlogin22" id="sidecontent">HOME/DESIGNERS/NAME SURNAME</div>

          <div className="save">
            <button type="button" id="cart_btn"
              disabled={product.stock == 0 ? true : false}
              onClick={() => {
                dispatch(addCartItem(product._id, quantity))
                toast('Saved succesfully', {
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
                  <p className="namepara">Designer: Sanjay Garg</p>
                </div>
                <div className="yuf7iimage">
                  <div className="imagesingke">
                    <img src="/images/p11.svg" alt="Surya" />
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
                      <p id="tfiyug">Bengaluru</p>
                    </div>
                  </div>
                  <div className="lgiuoh">
                    <div>
                      Established in
                      <p id="tfiyug">2008</p>
                    </div>
                  </div>
                  <div>
                    <p>lavelle road 5 & 6, walton road
                      <br />bengaluru - 560001</p>
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
                      <h2 className="tyrdufguib">SANJAY GARG</h2>
                      <p className="hgcvyg">{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Specialisation" ? <div>
                      <p ><span className="gdfy">- Textiles:</span>{state.firstpara}</p>
                   
                      <p className="tyrfug"><span className="gdfy">- Clothing:</span> {state.secondpara}</p>
                      <p className="tyrfug"><span className="gdfy">- Accessories:</span>{state.thirdpara}</p>
                      <p className="tyrfug"><span className="gdfy">- Home:</span>{state.fourpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Occasion" ? <div>
                      <p>{state.firstpara}</p>
                      <p>{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                      <p>{state.fourpara}</p>
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
                          <img src="/images/s4.svg" />
                        </div>
                      </div>
                      <div className="midline"></div>
                      <div className="leftnj">
                        <p className="ordersl"><b>{state.secondpara}</b></p>
                        <div className="line"></div>
                        <p className="yugfhb" id="address"><b>Bengaluru:</b></p>
                        <p className="yugfhb">
                        Lavelle Road
                        <br />
                        Phone: 080 4121 3161
                           </p>
                        <p className="yugfhb" id="address"><b>Chennai (Malligai):</b></p>
                        <p className="yugfhb">
                        no. 2/15 cenotaph 1st lane, ganapathy
                        <br /> colony main road, teynampet 
                        <br />Phone: 089 2528 6663
                           </p>
                        <p className="yugfhb" id="address"><b>Hyderabad:</b></p>
                        <p className="yugfhb">
                        6-3-250/1, road number 1, ahmed nagar,
                        <br /> banjara hills
                        <br />
                        Phone: 089 2528 6663
                           </p>
                        <p className="yugfhb" id="address"><b>Bengaluru:</b></p>
                        <p className="yugfhb">
                        1, reay house, best marg, colaba
                        <br />Phone: 089 2528 6663
                           </p>
                     
                      </div>
                    </div> : ""
                  }


                  {
                    state.title === "Gallery" ? <div className="hyjhtigu">
                      <img src="/images/g.svg" />
                      <img src="/images/g1.svg" />
                      <img src="/images/g2.svg" />
                      <img src="/images/g3.svg" />
                      <img src="/images/g4.svg" />
                      <img src="/images/g5.svg" />
                      <img src="/images/g6.svg" />
                      <img src="/images/g7.svg" />
                      <img src="/images/g8.svg" />
                      <img src="/images/g9.svg" />

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
