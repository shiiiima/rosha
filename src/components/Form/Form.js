import { Grid } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Form.css"
function Form() {
    return (
        <>

        <div className="form-holder">

             <form>
            <Grid container className="textfield-holder">
                <Grid item className="" xs={12} md={5}>

                <TextField id="filled-basic" label="نام" variant="filled" className="input-form" />

                   
                    </Grid>
                    <Grid item className="" xs={12} md={5}>

<TextField id="filled-basic" label=" نام خانوادگی" variant="filled" className="input-form" />
                    </Grid>
                    <Grid container className="textfield-holder">
                        <Grid item xs={12}>
                        <TextField id="filled-basic" label="ایمیل" variant="filled" className="input-form" />

                    </Grid>
                    </Grid>
                    <Grid container className="textfield-holder" >
                        <Grid item xs={12}>
                        <TextField id="filled-basic" label="پیام" variant="filled" className="input-form" />
                    </Grid>

                    </Grid>

                    </Grid>
                    <Button variant="contained" className="btn-send">ارسال</Button>
            </form>

            </div>
            </>
    )
}
export default Form;