import React from 'react';
import ReactDOM from 'react-dom';
/**
    * Challenge: Map over the thingsArray to generate
    * a <p> element for each item and render them on the page
    * below the button
    */

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]


    return (
        <div>
            <button>Add Item</button>
            {/* Insert the things here*/}
            <p></p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));