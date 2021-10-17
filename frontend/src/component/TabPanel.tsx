import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fatality from "./Fatality";
import data from '../data.json'
import Increment from "./Increment";
import Vote from "./Vote";
import Spacer from "./Spacer";

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
        style={{ width: '100%' }}
      >
        
        {value === index && (
        <CardContent>
            <Card>
                <Box component="span" sx={{ display: 'block',p: 1, m: 1, bgcolor: 'background.paper',}}>
                    <Typography>{children}</Typography>
                    <Stack  spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                        <Fatality row={data.tournois[Number(tournoi)].kill.row} col={data.players[value].col} killedrow={data.tournois[Number(tournoi)].killed?.row} />
                        <Increment type="Kaaris" row={data.tournois[Number(tournoi)].kaaris.row} col={data.players[value].col}  />
                        <Increment type="Recaves" row={data.tournois[Number(tournoi)].recave.row} col={data.players[value].col}  />
                    </Stack>
                </Box>
                <Spacer y={1} />
                <Box component="span" sx={{ display: 'block',p: 1, m: 1, bgcolor: 'background.paper',}}>
                    <Typography>{children}</Typography>
                    <Stack direction="row" spacing={2}>
                        <Vote type="Dabadie" row={data.tournois[Number(tournoi)].dabadie.row} col={data.players[value].col} />
                        <Vote type="Chatte" row={data.tournois[Number(tournoi)].chatte.row} col={data.players[value].col} />
                        <Vote type="Gains" row={data.tournois[Number(tournoi)].gains.row} col={data.players[value].col} />
                        <Vote type="Points" row={data.tournois[Number(tournoi)].points.row} col={data.players[value].col} />
                    </Stack>
                </Box>
            </Card>
        </CardContent>
        )}
      </div>
    );
  }

  export default TabPanel