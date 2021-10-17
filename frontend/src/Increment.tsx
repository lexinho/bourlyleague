import { Button } from "@mui/material";
import { increment } from "./sheetrepo";

function Increment({type, row, col}: any) {

    const toggleButtonState = () => {
        increment(row, col)
    };

    return (
        <>
          <Button variant="contained" onClick={toggleButtonState}>{type}</Button>
        </>
      )
}

export default Increment