import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const BaisTable = () => {

    const columns = [
        {
            headerName: 'نام و نام خانوادگی',
            field: 'name',
            width: 150,
            filter: true,
            sortable: true,
            resizable: true,
        },
        {
            headerName: 'شماره موبایل',
            field: 'mobile',
            width: 120,
            filter: true,
            sortable: true,
        },
        {
            headerName: 'سن',
            field: 'age',
            width: 90,
            filter: true,
            sortable: true,
        },
        {
            headerName:'ایمیل',
            field: 'email',
            width: 150,
            filter: true,
            sortable: true,
        },
        {
            headerName:'تاریخ ایجاد',
            field: 'createdAt',
            width: 150,
            filter: true,
            sortable: true,
        },
        {
            field: "hobbys",
            headerName: "Action",
            sortable: false,
            width: 160,
            renderCell: () => (
              <span style={{ display: "flex" }}>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Del
                </Button>
              </span>
            )
          }
        
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    return (<>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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