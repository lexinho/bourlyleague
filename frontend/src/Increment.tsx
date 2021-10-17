import { Button } from "@mui/material";
import { increment } from "./sheetrepo";
import { useDispatch } from "react-redux";
import { updateAlert } from "./alertSlice";

function Increment({type, row, col}: any) {

    const dispatch = useDispatch()

    const toggleButtonState = () => {
        increment(row, col).then((response:any) => {
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

    return (
        <>
          <Button variant="contained" onClick={toggleButtonState}>{type}</Button>
        </>
      )
}

export default Increment