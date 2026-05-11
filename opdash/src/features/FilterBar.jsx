import { useState } from "react";

function FilterBar({searchTerm, setSearchTerm, filterSeverity, setFilterSeverity, filterStatus, setFilterStatus}) { 

    const handleStatus = (e) => {
        setFilterStatus(e.target.value);
    }

    const handleSeverity = (e) => {
        setFilterSeverity(e.target.value);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="filter-bar">
            
                <select value={filterStatus} onChange={handleStatus}>
                    <option value="">All Statuses</option>
                    <option value="OPEN">Open</option>
                    <option value="RESOLVED">Resolved</option>
                </select>
        
            
                <select value={filterSeverity} onChange={handleSeverity}>
                    <option value="">All Severities</option>
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                </select>
            
            
                <input
                type="text"
                placeholder="Search by Trade or CounterParty"
                value={searchTerm}
                onChange={handleSearch}
                />
        

            </div>

    )

}

export {FilterBar}