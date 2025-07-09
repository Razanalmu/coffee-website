import "@fontsource/roboto";
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import theme from './assets/theme.js';
import Hero from "./Components/Hero/Hero.jsx";
import Coffee from "./Components/Coffee/Coffee.jsx";
import { ThemeProvider } from "@mui/material";

function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Coffee/>
    </ThemeProvider>
      
    </>
  )
}

export default App
