import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <div className="imgg">
        <img src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?w=1380&t=st=1706071868~exp=1706072468~hmac=cebcc927982d7c284f2453c215fc43bf32c17ff10d7224f063414079dcf4d4c8"/>
      </div>
      <div className="sideHead">
        <li><Link>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <button className='login'
        onClick={(e)=>{
          e.target.innerHTML=e.target.innerHTML==="Login" ? "Logout" : "Login";
        }}
        >Login</button>
      </div>
    </div>
  )
}

export default Header
