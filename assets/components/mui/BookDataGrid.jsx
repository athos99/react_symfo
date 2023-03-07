import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Titre', width: 300},
    {field: 'resume', headerName: 'Resumé', width: 600},
    {field: 'price', headerName: 'Prix', width: 80},
    {field: 'createDate', headerName: 'Date', width: 100}
]
const BookDataGrid = () => {
    const [tableData, setTableData] = useState([]);
    const [message1, setMessage1] = React.useState('');
    const [message2, setMessage2] = React.useState('');

    useEffect(() => {
        fetch("http://localhost/symfony/ux/public/api/books")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])
//    console.log(tableData)


    const handleRowClick = (params) => {
        setMessage1(`Book line "${params.row.title}" clicked`);
    };
    const handleCellClick = (params) => {
        setMessage2(`Book line "${params.row.title}" for column "${params.colDef.headerName}" clicked`);
    };
    return (
        <div style={{height: '700px', width: '100%'}}>
            {message1 && <Alert severity="info">{message1}</Alert>}
            {message2 && <Alert severity="info">{message2}</Alert>}
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
                onRowClick={handleRowClick}
                onCellClick={handleCellClick}
            />
        </div>
    )
}

export default BookDataGrid