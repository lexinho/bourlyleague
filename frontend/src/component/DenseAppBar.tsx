import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <Icon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Bourly League Baby
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DenseAppBar