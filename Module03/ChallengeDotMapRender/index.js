import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    let thingsElements
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])


    function addItem() {
        setThingsArray((prevArray) => {
            return new prevArray.push('Thing '.concat(thingsArray.length))

        })
    }



    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsArray.map(thing => <p key={thing}>{thing}</p>)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));