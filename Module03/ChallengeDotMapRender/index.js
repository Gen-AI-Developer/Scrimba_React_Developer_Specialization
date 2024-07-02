import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    return (
        <div>
            <button>Add Item</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));