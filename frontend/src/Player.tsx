import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TabPanel from "./TabPanel";


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Player({ tournoi }: { tournoi: string }) {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
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
        <TabPanel value={value} index={0} tournoi={tournoi} />
        <TabPanel value={value} index={1} tournoi={tournoi} />
        <TabPanel value={value} index={2} tournoi={tournoi} />
        <TabPanel value={value} index={3} tournoi={tournoi} />
        <TabPanel value={value} index={4} tournoi={tournoi} />
        <TabPanel value={value} index={5} tournoi={tournoi} />
        <TabPanel value={value} index={6} tournoi={tournoi} />
        <TabPanel value={value} index={7} tournoi={tournoi} />
        <TabPanel value={value} index={8} tournoi={tournoi} />
        <TabPanel value={value} index={9} tournoi={tournoi} />
        <TabPanel value={value} index={10} tournoi={tournoi} />
        <TabPanel value={value} index={11} tournoi={tournoi} />
        <TabPanel value={value} index={12} tournoi={tournoi} />
        <TabPanel value={value} index={13} tournoi={tournoi} />
        <TabPanel value={value} index={14} tournoi={tournoi} />
        <TabPanel value={value} index={15} tournoi={tournoi} />
      </Box>
    </div>
  );
}

export default Player;
