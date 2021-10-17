import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { update } from "./sheetrepo";

function Vote({type, row, col}: any) {

    const [count, setCount] = useState('')

    const toggleButtonState = () => {
        update(row, col, type, count)
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value);
    };

    return (
        <>
          <TextField id="outlined-basic" label={type} variant="outlined" onChange={handleChange} />
          <Button variant="contained" onClick={toggleButtonState}>{type}</Button>
        </>
      )
}

export default Vote