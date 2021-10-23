

import React , {useState} from "react";

import {Link} from "react-router-dom";
import "./Navbar.css"
import BtnSignIn from "../Button/Button"
import {navitems} from "../Data/Data"
import DropDown from "../DropDown/DropDown";

function Navbar(){
 const [dropdown,setDropdown]=useState(false)
    return(
        <>
        <nav className="navbar">
        <div className="signin-holder">
        <BtnSignIn/>
        </div>
            <div className="navbar-items">
            <Link to="/" className="navbar-logo"></Link>
           
       
           <ul className="nav-items">
               {navitems.map(item=>{
                   if (item.title=="سرویس ها"){
                       return(
                           <li key={item.id} className="nav-item" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                       
                                <i class="fas fa-angle-down"></i>
                           <Link to="item.path" >{item.title}</Link>
                           {dropdown && <DropDown/>}
                       </li>
                        
                       )
                   }
                   return(
                       <li key={item.id} className="nav-item">
                       <Link to="item.path" >{item.title}</Link>
                    
                   </li>
                    
                   )
                  
               })}
              
           </ul>
            </div>

        </nav>
       
        </>
    )


}
export default Navbar;