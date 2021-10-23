import React,{useState} from "react"
import {Link} from "react-router-dom"
import {serviceDropdown} from "../Data/Data"
import "./DropDown.css"
function DropDown (){
    const [dropdown,setDropdown]=useState(false)
return(
    < div className="dropdown">
    <ul className={dropdown ? "services-submenu clicked" : "services-submenu"}   onClick={()=>setDropdown(!dropdown)}>
   
        {serviceDropdown.map(item=>{
            return(
                <li key={item.id} >
                    <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link>
                    
                </li>
            )
        })}
    </ul>
    </div>
)

}
export default DropDown;