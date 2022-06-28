import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { getAllusers, deleteUser, updateUser } from '../services/user';
import DeleteModal from './delete';
import EditModal from './edit';


const BaisTable = () => {

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const setAllUsers = () => {
    getAllusers().then(users => setUsers(users.data));
  }


  useEffect(() => {
    setAllUsers()
  }, [refresh]);


  const handelEditModal = () => {
    setOpenEdit(true);
  }
  const handleCloseEditModal = () => {
    setOpenEdit(false);
  }

  const handelEdit = () => {
    updateUser(selectedUser).then(() => {
      setOpenEdit(false);
      setRefresh(refresh + 1);
    }
    );
  }

  const handelDeleteModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    deleteUser(selectedRows[0].id).then(() => {
      setAllUsers();
      setRefresh(refresh + 1);
      setOpen(false);
    }
    )
  }

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
    {
      field: "hobbys",
      headerName: "Action",
      sortable: false,
      width: 160,
      renderCell: () => (
        <span style={{ display: "flex" }}>
          <Button variant="contained" color="primary" onClick={handelEditModal}>
            ویرایش
          </Button>
          <Button variant="contained" color="secondary" onClick={handelDeleteModal}>
            حذف
          </Button>
        </span>
      )
    }

  ];


  return (<>
    <Box sx={{
      height: 400,
      width: 800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      justifyItems: 'center',
      margin: 'auto',
    }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = users.filter((row) =>
            selectedIDs.has(row.id),
          );
          setSelectedRows(selectedRows);
          setSelectedUser(selectedRows[0]);
        }}
      />
    </Box>
    <DeleteModal
      handleCloseModal={handleCloseModal}
      open={open}
      handleDelete={handleDelete}
    />
    <EditModal
      handleCloseEditModal={handleCloseEditModal}
      open={openEdit}
      handleEdit={handelEdit}
      selectedUser={selectedUser}
    />
  </>)
}
export default BaisTable;