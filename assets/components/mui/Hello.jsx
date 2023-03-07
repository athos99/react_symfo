import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'; // Grid version 1
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyApp() {
    return (
        <Grid container spacing={2}>
            <Avatar>H</Avatar>
            <Avatar sx={{bgcolor: 'orange'}}>N</Avatar>
            <Avatar sx={{bgcolor: 'purple'}}>OP</Avatar>
            <Button variant="outlined" size="large" color="success" endIcon={<DeleteIcon/>}>Hello World</Button>
        </Grid>
    );
}