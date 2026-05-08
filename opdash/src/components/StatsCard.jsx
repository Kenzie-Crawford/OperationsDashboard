import React from 'react'

 function StatsCard ({label, value, variant}) {  

    return (
        <div className={`stats-card ${variant}`}>
            <h1 className="stats-card-label">{label}</h1>
            <h2 className="stats-card-value">{value}</h2>
        </div>
    );
}
export { StatsCard };

  
