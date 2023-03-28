import React, {useState, useContext} from 'react';
import {FormControl, FormGroup, Checkbox, FormControlLabel, InputLabel, Input, FormHelperText} from '@mui/material';
import {OptionEmailContext} from './Context';


const GroupEmail = () => {
    console.log('GroupEmail');
    const {optionEmail, setOptionEmail} = useContext(OptionEmailContext);
    return (<FormGroup>
            {optionEmail ?
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                : <></>
            }
        </FormGroup>
    );
}

export default GroupEmail;