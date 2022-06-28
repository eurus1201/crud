import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { Grid } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import logo from '../logoaseron.svg'

const EditModal = ({ open, handleCloseEditModal, handleEdit, selectedUser }) => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
        }
    });
    const onSubmit = data => console.log(data);

    // console.log(selectedUser)
    return (

        <Dialog fullWidth open={open} onClose={handleCloseEditModal} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">ویرایش</DialogTitle>
            <DialogContent>
                <Grid container justifyContent={'center'} >
                <img src={logo} alt="logo" />
                </Grid>
                <DialogContentText>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid display={'flex'} flexDirection='row' xs padding={5}>
                            <Grid item xs={12}>
                                <Grid item md={6} xs={12} margin={1}>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field }) => <Input
                                        placeholder='نام'
                                        {...field} />}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} margin={1}>
                                     <Controller
                                        name="phone"
                                        control={control}
                                        render={({ field }) => <Input 
                                        placeholder='شماره تلفن'
                                        {...field} />}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item md={6} xs={12} margin={1}>
                                     <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => <Input
                                        placeholder='ایمیل'
                                        {...field} />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>


                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseEditModal} color="secondary">
                    انصراف
                </Button>
                <Button type='submit' onClick={handleSubmit(onSubmit)} color="primary">
                    ویرایش
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditModal;