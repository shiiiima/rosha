import React from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button"
function BtnSignIn(){
    return(
<Link to="signup">
    <Button className="btn-signin" varianet="contained">ورود|
ثبت نام</Button>
</Link>
    )
}
export default BtnSignIn;