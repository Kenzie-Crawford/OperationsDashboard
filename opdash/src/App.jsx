import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { SummaryCard } from './features/SummaryCard';
import { TradeTable } from './features/TradeTable';
import { useTrades } from './hooks/useTrades.js';
import { FilterBar } from './features/FilterBar.jsx';
import { useMemo } from 'react';
import { TradeDetail } from './features/TradeDetail.jsx';



function App() {

  const { trades, setTrades, loading, error } = useTrades();
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
    });
  }, [trades, filterStatus, filterSeverity, searchTerm]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState(null);

  const handleRowClick = (trade) => {
    setSelectedTrade(trade);
    setIsModalOpen(true);
    
  };

  function handleResolve(tradeId, note) {
    const resolvedAt = new Date().toISOString().split("T")[0];
    const updatedTrades = trades.map((trade) => {
      if (trade.id === tradeId) {
        return {
          ...trade,
          status: "RESOLVED",
          resolvedAt,
          resolutionNotes: note
        }
      }
      return trade;
    });
    setTrades(updatedTrades);
    console.log(`Trade ${tradeId} marked as resolved with note: ${note}`);

  }

  return (
    <div className="App">
      <NavBar />
      <SummaryCard trades={trades} loading={loading} error={error} />
      <TradeTable trades={filteredTrades} loading={loading} error={error} onRowClick={handleRowClick} />
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterSeverity={filterSeverity}
        setFilterSeverity={setFilterSeverity}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      {isModalOpen && <TradeDetail setIsModalOpen={setIsModalOpen} trade={selectedTrade} onResolve={handleResolve} />}
    </div>

  )


}

export default App;
