import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Updates from './pages/Updates';
import Categories from './pages/Categories';
import Recommended from './pages/Recommended';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E95420', // Ubuntu orange
    },
    secondary: {
      main: '#77216F', // Ubuntu purple
    },
    background: {
      default: '#2C001E',
      paper: '#300a24',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/recommended" element={<Recommended />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 