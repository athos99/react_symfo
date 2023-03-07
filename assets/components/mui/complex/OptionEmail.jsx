import React, {useContext, useState} from "react";
import {OptionEmailContext} from "./Context";
import {Checkbox, FormControlLabel} from "@mui/material";

const OptionEmail = () => {
    console.log('OptionEmail');
    const {optionEmail, setOptionEmail} = useContext(OptionEmailContext);
    return (
        <FormControlLabel
            control={
                <Checkbox id={"chk-email"} name={"chk-email"} checked={optionEmail}
                          onChange={(e) => {
                              setOptionEmail(e.target.checked);
                          }}
                />}
            label={"Email"}>
        </FormControlLabel>
    );
}
export default OptionEmail;