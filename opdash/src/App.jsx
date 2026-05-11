import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { StatsCard } from './components/StatsCard';
import {SummaryCard} from './features/SummaryCard';
import {TradeTable} from './features/TradeTable';
import Badge from './components/Badge.jsx';
import { useTrades } from './hooks/useTrades.js';



function App() {

  const {trades, loading, error} = useTrades();

  

  return (
    <div className="App">
      <NavBar /> 
      <StatsCard/> 
      <SummaryCard trades={trades} loading={loading} error={error} />
      <StatsCard/>
      <TradeTable trades={trades} loading={loading} error={error} />
      <Badge/>
      </div>

  )
    
     
}

export default App;
