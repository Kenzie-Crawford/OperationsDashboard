import { useState } from "react";
import { useEffect } from "react";
import { fetchMockTrades } from "../data/mockTrades";

function SummaryCard() {
    const [trades, setTrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
function fetchTrades() {

  
}