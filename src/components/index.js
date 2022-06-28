import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getAllusers } from '../services/user';

const BaisTable = () => {

  const [users, setUsers] = useState([]);

  const setAllUsers = () => {
    getAllusers().then(users => setUsers(users.data));
  }

  useEffect(() => {
    setAllUsers()
  }, [])



  const columns = [
    {
      headerName: "ID",
      field: "id",
      width: 20,
      sortable: true,
    },
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
      field: 'phone',
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
      headerName: 'ایمیل',
      field: 'email',
      width: 150,
      filter: true,
      sortable: true,
    },
    // {
    //   headerName: 'تاریخ ایجاد',
    //   field: 'createdAt',
    //   width: 150,
    //   filter: true,
    //   sortable: true,
    // },
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


  return (<>
    <Box sx={{
      height: 400,
      width: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      justifyItems:'center',
      margin: 'auto',
    }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  </>)
}
export default BaisTable;