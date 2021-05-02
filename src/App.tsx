import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import LoginPage from './pages/Login/Login.page';

function App(): ReactElement {
  return (
    <Box className="App">
      <LoginPage />
    </Box>
  );
}

export default App;
