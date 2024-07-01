import { Link } from 'react-router-dom';
import "../../styles/Designers.css"
import Header from '../layouts/Header';
export default function Product({ product }) {
    return (
        <>

            <div id="uygh">
          
                        {product.images.length > 0 &&
                            <img
                                className="imageprod"
                                src={product.images[0].image}
                                alt={product.name}
                            />}
                        <div className="datsprogu">
                            <div>
                                <div className='uyfguhgf' >
                                <span>{product.description}</span>
                                <br/>
                                <Link to={`/alldesigners/${product._id}`}>{product.name}</Link>
                                </div>
                                <div className='lineprodict'></div>
                                <div className='iuyhgf7y6u8ig'>
                                <span className='areapoop'>From</span> {product.seller}
                                </div>
                                <div className='lineprodict'></div>

                                <div className='onelastview'>
                                <Link to={`/alldesigners/${product._id}`} className="view_btn"><div className='ytdftyui'><b>View Products</b><img id='imageslop' src='/images/arrow.svg' /></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
     
        </>

    )
}
