import React from 'react'





 function StatsCard ({label, value, variant}) {  

    return (
        <div className={`stats-card ${variant}`}>
            <div className="stats-card-label">{label}</div>
            <div className="stats-card-value">{value}</div>
        </div>
    );
}
export {StatsCard};

  
