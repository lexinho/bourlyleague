import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Increment from "./Increment";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
              <Increment type="Kill" />
              <Increment type="Kaaris" />
              <Increment type="Chatte" />
              <Increment type="Dabadie" />
              <Increment type="Recaves" />
            </Stack>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Player({ player }: { player: string }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <p>{player}</p> */}
      {/* <Increment type="Kill" />
      <Increment type="Kaaris" />
      <Increment type="Chatte" />
      <Increment type="Dabadie" />
      <Increment type="Recaves" /> */}

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Greg" {...a11yProps(0)} />
          <Tab label="Lexa" {...a11yProps(1)} />
          <Tab label="Giorgio" {...a11yProps(2)} />
          <Tab label="David" {...a11yProps(3)} />
          <Tab label="Cedric" {...a11yProps(4)} />
          <Tab label="Geraldine" {...a11yProps(5)} />
          <Tab label="Noar" {...a11yProps(6)} />
          <Tab label="Rusmir" {...a11yProps(7)} />
          <Tab label="Gilles" {...a11yProps(8)} />
          <Tab label="Guillaume" {...a11yProps(9)} />
          <Tab label="Damien" {...a11yProps(10)} />
          <Tab label="Haroun" {...a11yProps(11)} />
          <Tab label="Seb" {...a11yProps(12)} />
          <Tab label="Dadoo" {...a11yProps(13)} />
          <Tab label="Amazon" {...a11yProps(14)} />
          <Tab label="Crinou" {...a11yProps(15)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      
      </TabPanel>
    </Box>
    </div>
  );
}

export default Player;
