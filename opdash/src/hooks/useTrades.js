import {useState, useEffect} from 'react';
import { fetchMockTrades } from '../data/mockTrades';


function useTrades() {

const [trades, setTrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchMockTrades();
                setTrades(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        trades,
        setTrades,
        loading,
        error
    }
}

export {useTrades};