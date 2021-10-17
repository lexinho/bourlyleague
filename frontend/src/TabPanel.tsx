import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fatality from "./Fatality";
import data from './data.json'
import Increment from "./Increment";
import Vote from "./Vote";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    tournoi: string;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, tournoi, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
              <Stack spacing={2}>
                <Fatality row={data.tournois[Number(tournoi)].kill.row} col={data.players[value].col} killedrow={data.tournois[Number(tournoi)].killed?.row} />
                <Increment type="Kaaris" row={data.tournois[Number(tournoi)].kaaris.row} col={data.players[value].col}  />
                <Increment type="Recaves" row={data.tournois[Number(tournoi)].recave.row} col={data.players[value].col}  />
                <Vote type="Dabadie" row={data.tournois[Number(tournoi)].dabadie.row} col={data.players[value].col} />
                <Vote type="Chatte" row={data.tournois[Number(tournoi)].chatte.row} col={data.players[value].col} />
              </Stack>
          </Box>
        )}
      </div>
    );
  }

  export default TabPanel