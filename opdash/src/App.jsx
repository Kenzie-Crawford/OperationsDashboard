import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { StatsCard } from './components/StatsCard';
import {SummaryCard} from './features/SummaryCard';
import {TradeTable} from './features/TradeTable';
import Badge from './components/Badge.jsx';
import { useTrades } from './hooks/useTrades.js';
import { FilterBar } from './features/FilterBar.jsx';
import { useMemo } from 'react';



function App() {

  const {trades, loading, error} = useTrades();
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSeverity, setFilterSeverity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const filteredTrades = useMemo(() => {
    return trades.filter((trade) => {
      const matchesStatus = filterStatus ? trade.status === filterStatus : true;
      const matchesSeverity = filterSeverity ? trade.severity === filterSeverity : true;
      const matchesSearchTerm = searchTerm ? 
        (trade.counterparty.toLowerCase().includes(searchTerm.toLowerCase()) || 
        trade.id.toString().includes(searchTerm)) : true;

    return matchesStatus && matchesSeverity && matchesSearchTerm;
   } );} , [trades, filterStatus, filterSeverity, searchTerm]);

  

  return (
    <div className="App">
      <NavBar /> 
      <StatsCard/> 
      <SummaryCard trades={trades} loading={loading} error={error} />
      <StatsCard/>
      <TradeTable trades={filteredTrades} loading={loading} error={error} />
      <Badge/>
      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm = {setSearchTerm}
        filterSeverity={filterSeverity}
        setFilterSeverity={setFilterSeverity}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      </div>

  )
    

}

export default App;
