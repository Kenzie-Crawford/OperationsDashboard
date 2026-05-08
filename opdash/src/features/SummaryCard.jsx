import { useState } from "react";
import { useEffect } from "react";
import { fetchMockTrades } from "../data/mockTrades";
import { StatsCard } from "../components/StatsCard";

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
        <div className="summary-cards">
            < StatsCard
            label="Total Trades"
            value={totalTrades}
            variant = "default"
            />
            < StatsCard
            label="Unresolved Exceptions"
            value={unresolvedCount}
            variant = "warning"
            />
            < StatsCard
            label="High Severity Exceptions"
            value={highSeverityCount}
            variant = "danger"
            />
            < StatsCard
            label="Resolved Today"
            value={resolvedTodayCount}
            variant = "success"
            />
        </div>
    );
}

export {SummaryCard};