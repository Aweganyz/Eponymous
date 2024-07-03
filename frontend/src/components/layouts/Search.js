import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

export default function Search () {

    const navigate = useNavigate();
    const location = useLocation();
    const [keyword, setKeyword] = useState("")

    const searchHandler = (e) => {
        
        e.preventDefault();
        navigate(`/search/${keyword}`)

    }

    const clearKeyword = () =>{
        setKeyword("");
    }

    useEffect(() => {
        if(location.pathname === '/') {
            clearKeyword();
        }
    },[location])

    return (
        <form onSubmit={searchHandler}>
           
            <div class="search-box">
                <input type="text" class="search-input" placeholder="Search" onChange={(e)=>{ setKeyword(e.target.value) }}
                value={keyword} />
                <div id='seearch'>
                    <button id="search_btn" className="btnui">  <img alt='Eponymous' src='/images/search.svg'></img>
                    </button>
                </div>
            </div>
        </form>
    )
}
