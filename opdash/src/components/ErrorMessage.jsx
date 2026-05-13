import React from 'react';

function ErrorMessage({ message}) {
    return (
        <div className="error-container">
            <p>Error: {message}</p>
            
        </div>
    );
}

export { ErrorMessage };