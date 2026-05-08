import Badge from "../components/Badge.jsx";
import { fetchMockTrades, mockTrades } from "../data/mockTrades.js";
import { useState, useEffect } from "react";


function TradeTable() {
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

    return (

        <div className="trade-table-container">

            {trades.length === 0 ? (
                <p>No trades found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Asset Type</th>
                            <th>Counter Party</th>
                            <th>Settlement Date</th>
                            <th>Severity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            {trades.map((trade) => (
                                <tr key={trade.id}>
                                    <td>{trade.assetType}</td>
                                    <td>{trade.counterparty}</td>
                                    <td>{trade.settlementDate}</td>
                                    <td>{trade.severity}</td>
                                    <td>{trade.status}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            )}
        </div>
    );
}
export { TradeTable };
