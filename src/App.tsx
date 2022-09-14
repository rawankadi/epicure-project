import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useFetchAndLoadData } from './Components/LoadData';




function App() {
  useFetchAndLoadData();
  return (
    <Layout/>
  );
}

export default App;
