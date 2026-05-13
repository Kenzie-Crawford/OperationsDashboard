import Badge from "../components/Badge.jsx";
import { LoadingSpinner } from "../components/LoadingSpinner.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";



function TradeTable({ trades, loading, error, onRowClick }) {

    if (loading) return <LoadingSpinner message="Loading trades..." />
    if (error) return <ErrorMessage message={error} />

    

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
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Settlement Date</th>
                            <th>Exception Reason</th>
                            <th>Severity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trades.map((trade) => (
                            <tr key={trade.id} onClick={() => onRowClick(trade)}>
                                <td>{trade.id}</td>
                                <td>{trade.assetType}</td>
                                <td>{trade.counterparty}</td>
                                <td>{trade.amount}</td>
                                <td>{trade.currency}</td>
                                <td>{trade.settlementDate}</td>
                                <td>{trade.exceptionReason}</td>
                                <td><Badge value={trade.severity} /></td>
                                <td><Badge value={trade.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export { TradeTable };
