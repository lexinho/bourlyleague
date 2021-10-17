import { Dialog, DialogTitle, List, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { increment, kill } from "./sheetrepo";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const killables = ['Greg', 'Lexa', 'Giorgio', 'David', 'Cedric', 'Geraldine', 'Noar', 'Rusmir', 'Gilles', 'Guillaume', 'Damien', 'Haroun', 'Seb', 'Dadoo', 'Amazon', 'Crinou'];

function SimpleDialog(props: any) {
  const { onClose, selectedValue, open, row, col, killedrow } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (killable: string) => {
    increment(row, col)
    kill(killedrow, col, killable)
    onClose(killable);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Who did you kill?</DialogTitle>
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
