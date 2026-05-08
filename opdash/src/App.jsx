import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { StatsCard } from './components/StatsCard';
import {SummaryCard} from './features/SummaryCard';
import {TradeTable} from './features/TradeTable';



function App() {


  

  return (
    <div className="App">
      <NavBar /> 
      <StatsCard/> 
      <SummaryCard/>
      <StatsCard/>
      <TradeTable/>
      </div>

  )
    
     
}

export default App;
