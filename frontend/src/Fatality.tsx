import { Dialog, DialogTitle, List, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { increment, kill } from "./sheetrepo";
import { useDispatch } from "react-redux";
import { updateAlert } from "./alertSlice";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const killables = ['Greg', 'Lexa', 'Giorgio', 'David', 'Cedric', 'Geraldine', 'Noar', 'Rusmir', 'Gilles', 'Guillaume', 'Damien', 'Haroun', 'Seb', 'Dadoo', 'Amazon', 'Crinou'];

function SimpleDialog(props: any) {
  const dispatch = useDispatch()
  const { onClose, selectedValue, open, row, col, killedrow } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (killable: string) => {
    increment(row, col)
    .then((response:any) => {
      if(response.status === 200)
        {
          dispatch(updateAlert({type: 'success', message: response.data}))
        }
      else
        {
          dispatch(updateAlert({type: 'error', message: response.data}))
        }
     }).catch(error=>{
        dispatch(updateAlert({type: 'error', message: error}))
        console.error(error)
     })
    kill(killedrow, col, killable)
    .then((response:any) => {
      if(response.status === 200)
        {
          dispatch(updateAlert({type: 'success', message: response.data}))
        }
      else
        {
          dispatch(updateAlert({type: 'error', message: response.data}))
        }
     }).catch(error=>{
        dispatch(updateAlert({type: 'error', message: error}))
        console.error(error)
     })
    onClose(killable);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle color='error'>Who did you kill?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {killables.map((killable) => (
          <ListItem button onClick={() => handleListItemClick(killable)} key={killable}>
            <ListItemText primary={killable} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

function Fatality({row, col, killedrow}: any) {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(killables[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
    <Button variant="contained" color="error" onClick={handleClickOpen}>
        Kill
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        row={row}
        col={col}
        killedrow={killedrow}
      />
    </>
  )
}

export default Fatality;
