import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAlert } from "./alertSlice";

import { useState } from "react";
import { update } from "./sheetrepo";

function Vote({type, row, col}: any) {
    const dispatch = useDispatch()

    const [count, setCount] = useState('')
   

    const toggleButtonState = () => {
        update(row, col, type, count)
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
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value);
    };

    const color = type==='Points' ? 'success' : type==='Gains' ? 'success' : 'secondary'

    return (
        <>
          <TextField id="outlined-basic" label={type} variant="outlined" onChange={handleChange} />
          <Button variant="contained" color={color} onClick={toggleButtonState}>{type}</Button>
        </>
      )
}

export default Vote