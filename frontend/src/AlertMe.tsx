import { Alert, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from "./useStore";
import { updateAlert } from "./alertSlice";
import { useDispatch } from "react-redux";

function AlertMe() {

    const dispatch = useDispatch()
    const alertStore= useAppSelector(state => state.alertStore)
    const [open, setOpen] = useState(true);
    // const [alert, setAlert] = useState(false);
    // const [alertContent, setAlertContent] = useState('');

    const handleClose = () => {
        setOpen(false)
        dispatch(updateAlert({type: 'success', message: ''}))
    }
    
    return (
        <>
        {alertStore.message === '' ?  <></> :
            <Collapse in={open}>
                <Alert severity={alertStore.type} action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>} sx={{ mb: 2 }} >{alertStore.message}
                </Alert>
            </Collapse>
        }
        </>)
}

export default AlertMe