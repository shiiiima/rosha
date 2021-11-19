

import React , {useState} from "react";

import {Link} from "react-router-dom";
import "./Navbar.css"
import BtnSignIn from "../Button/Button"
import {navitems} from "../Data/Data"
import DropDown from "../DropDown/DropDown";
import Logo from "../../Assets/images/4.png"

function Navbar(){
 const [dropdown,setDropdown]=useState(false)
    return(
        <>
        <nav className="navbar">

                <div className="navbar-items">
                <Link to="/" className="navbar-logo">
                <img src={Logo} />
            </Link>
           <ul className="nav-items">
               {navitems.map(item=>{
                   if (item.title=="سرویس ها"){
                       return (
                       
                           <li key={item.id} className="nav-item" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                        <i class="fa fa-angle-down"></i>
                                
                           <Link to="item.path" className="nav-link" >{item.title}</Link>
                           {dropdown && <DropDown/>}
                       </li>
                        
                       )
                   }
                   return(
                       <li key={item.id} className="nav-item">
                           <i className={item.icon}></i>
                       <Link to="item.path" className="nav-link" >{item.title}</Link>
                       
                    
                   </li>
                    
                   )
                  
               })}
              
           </ul>
           
                </div>
                <div className="signin-holder">
        <BtnSignIn/>
        </div>

        </nav>
       
        </>
    )


}
export default Navbar;