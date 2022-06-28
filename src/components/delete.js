import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DeleteModal = ({ open, handleCloseModal,handleDelete }) => {


    return (
        <Dialog open={open} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">حذف</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    آیا از حذف این رکورد اطمینان دارید؟
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal} color="secondary">
                    انصراف
                </Button>
                <Button onClick={handleDelete} color="primary">
                    حذف
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default DeleteModal;