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

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (killable: string) => {
    increment(57, 4)
    kill(64, 4, killable)
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

function Kill({ type }: { type: string }) {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(killables[1]);

  // const toggleButtonState = () => {
  //   increment(57, 4)
  //   kill(64, 4, "Greg")
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen}>
        Kill
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      {/* <Button variant="contained" onClick={toggleButtonState}>{type}</Button> */}
    </>
  )
}

export default Kill;
