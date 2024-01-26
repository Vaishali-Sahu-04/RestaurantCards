import React, { useEffect , useState} from 'react'
import Cart from './Cart'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function Body() {
    const [resList,setResList]=useState([]);
    const [dupList,setdupList]=useState([]);
    const [searchText,setSearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setdupList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

  return resList.length===0 ? <Shimmer/> : (
    <div className='body'>
      <div className="nav">
        <button onClick={()=>{
          const filtered = resList.filter((res)=>res.info.avgRating>4)
          setdupList(filtered);
        }}>Top Rated Restaurant
        </button>
        <div className="searchbar">
        <input className='search' type="text" value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        />
        <button className='search-btn' onClick={()=>{
          const filtered = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setdupList(filtered);
        }}>Search</button>
        </div>
        
      </div>   
      <div className="cards">
        {
            dupList.map((res)=>(
              <Link key={res.info.id} to='/restaurant'>
              <Cart resData={res}/>
              </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Body
