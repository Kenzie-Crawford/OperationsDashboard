
function Badge({value}) {

    const colorMap = {
        "HIGH": "badge-high",
        "MEDIUM": "badge-medium",
        "LOW": "badge-low",
        "OPEN": "badge-open",
        "RESOLVED": "badge-resolved"
    }


    return (
        <div className="badge-container">
            <span className = {colorMap[value]}>{value}</span>
        </div>
    );
}

export default Badge;

