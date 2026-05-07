import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { StatsCard } from './components/StatsCard';
import {SummaryCard} from './features/SummaryCard';



function App() {


  

  return (
    <div className="App">
      <NavBar /> 
      <StatsCard/> 
      <SummaryCard/>
      </div>

  )
    
     
}

export default App;
