import { useState } from "react";
import { useEffect } from "react";
import { fetchMockTrades } from "../data/mockTrades";

function SummaryCard() {
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

    const totalTrades = trades.length;
    const unresolvedCount = trades.filter((trades) => trades.status === "OPEN").length;
    const highSeverityCount = trades.filter((trades) => trades.severity === "HIGH").length;
    const resolvedTodayCount = trades.filter((trades) => {
        const today = new Date().toISOString().split("T")[0];
        const resolvedDate = new Date(trades.resolvedAt).toISOString().split("T")[0];
        return resolvedDate === today;
    }).length;

    return (
        <div className="summary-card">
            <h2>Total Trades</h2>
            <div className="summary-value">{totalTrades}</div>

            <div className="summary-card">
                <h2>Unresolved Exceptions</h2>
                <div className="summary-value">{unresolvedCount}</div>
            </div>
            <div className="summary-card">
                <h2>High Severity Count</h2>
                <div className="summary-value">{highSeverityCount}</div>
            </div>
            <div className="summary-card">
                <h2>Resolved Today</h2>
                <div className="summary-value">{resolvedTodayCount}</div>
            </div>
        </div>
    );
}

export default SummaryCard;