import Button from "@mui/material/Button";
import { increment } from "./sheetrepo";

function Increment({ type }: { type: string }) {

  const toggleButtonState = () => {
    increment(57, 4)
  };

  return <Button variant="contained" onClick={toggleButtonState}>{type}</Button>
}

export default Increment;
