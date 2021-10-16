import Button from "@mui/material/Button";

function Increment({ type }: { type: string }) {
  return <Button variant="contained">{type}</Button>;
}

export default Increment;
