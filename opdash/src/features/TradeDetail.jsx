import { useState } from "react";

function TradeDetail({ setIsModalOpen, trade, onResolve }) {

    const [note, setNotes] = useState("");
    const [error, setError] = useState("");


    function handleResolve() {
        if(!note.trim()) {
            setError("Notes required to resolve exception")
            return;
        } 
        onResolve(trade.id, note)
        setIsModalOpen(false)
        setNotes("")
        setError("")
        

        
    }

    return (
        <div className="trade-detail-container">
            <div className="trade-detail-row">
                <span className="detail-label">ID</span>
                <span className="detail-value">{trade.id}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Asset Type</span>
                <span className="detail-value">{trade.assetType}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Counter Party</span>
                <span className="detail-value">{trade.counterparty}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Amount</span>
                <span className="detail-value">{trade.amount}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Currency</span>
                <span className="detail-value">{trade.currency}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Settlement Date</span>
                <span className="detail-value">{trade.settlementDate}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Exception Reason</span>
                <span className="detail-value">{trade.exceptionReason}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Severity</span>
                <span className="detail-value">{trade.severity}</span>
            </div>

            <div className="trade-detail-row">
                <span className="detail-label">Status</span>
                <span className="detail-value">{trade.status}</span>
            </div>

            <div className="notes-container">
                <label className="notes-area">Analyst Notes</label>
                <textarea
                    value={note}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>

            <div className="modal-actions">
                <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>Close</button>
                <button className="resolve-btn" onClick={handleResolve}>Mark as Resolved</button>
                {error && <p className="error-message">{error}</p>}

            </div>





        </div>

    )
}

export { TradeDetail };