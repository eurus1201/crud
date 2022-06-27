import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const BaisTable = () => {

    const columns = [
        {
            headerName: 'Name',
            field: 'name',
            width: 150,
            filter: true,
            sortable: true,
            resizable: true,
            // checkboxSelection: true,
        },
        {
            headerName: 'Age',
            field: 'age',
            width: 90,
            filter: true,
            sortable: true,
        },
        {
            headerName: 'Country',
            field: 'country',
            width: 120,
            filter: true,
            sortable: true,
        }
    ];


    return (<>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                // rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    </>)
}
export default BaisTable;