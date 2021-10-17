import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import AlertMe from './AlertMe';

import "./App.css";
import DenseAppBar from "./DenseAppBar";
import Spacer from "./Spacer";
import store from '../common/store';
import Tournoi from "./Tournoi";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3949ab'
      },
      secondary: {
        main: '#4a148c'
      },
      success: {
        main: '#00897b'
      },
      error: {
        main: '#f44336'
      }
    },
  });

  return (
    <div>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      <DenseAppBar/>
      <AlertMe/>
      <Spacer y={1} />
      <Tournoi />
      </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
