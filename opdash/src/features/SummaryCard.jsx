import { StatsCard } from "../components/StatsCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";

function SummaryCard({ trades, loading, error }) {
    if (loading) return <LoadingSpinner message="Loading summary..." />
    if (error) return <ErrorMessage message={error} />

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
                variant="default"
            />
            < StatsCard
                label="Unresolved Exceptions"
                value={unresolvedCount}
                variant="warning"
            />
            < StatsCard
                label="High Severity Exceptions"
                value={highSeverityCount}
                variant="danger"
            />
            < StatsCard
                label="Resolved Today"
                value={resolvedTodayCount}
                variant="success"
            />
        </div>
    );
}

export { SummaryCard };