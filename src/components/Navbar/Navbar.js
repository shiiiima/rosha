

import React , {useState} from "react";

import {Link} from "react-router-dom";
import "./Navbar.css"
import BtnSignIn from "../Button/Button"
import {navitems} from "../Data/Data"
import DropDown from "../DropDown/DropDown";
import Logo from "../../Assets/images/uwzwcp.jpg"

function Navbar(){
 const [dropdown,setDropdown]=useState(false)
    return(
        <>
        <nav className="navbar">
        <div className="signin-holder">
        <BtnSignIn/>
        </div>
            <div className="navbar-items">
           <ul className="nav-items">
               {navitems.map(item=>{
                   if (item.title=="سرویس ها"){
                       return(
                           <li key={item.id} className="nav-item" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                       
                                <i class="fa fa-angle-down"></i>
                           <Link to="item.path" className="nav-link" >{item.title}</Link>
                           {dropdown && <DropDown/>}
                       </li>
                        
                       )
                   }
                   return(
                       <li key={item.id} className="nav-item">
                       <Link to="item.path" className="nav-link" >{item.title}</Link>
                       <i className={item.icon}></i>
                    
                   </li>
                    
                   )
                  
               })}
              
           </ul>
           <Link to="/" className="navbar-logo">
                <img src={Logo} />
            </Link>
            </div>

        </nav>
       
        </>
    )


}
export default Navbar;