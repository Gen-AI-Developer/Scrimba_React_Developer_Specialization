import React from 'react';
import ReactDOM from 'react-dom';
/**
    * Challenge: Map over the thingsArray to generate
    * a <p> element for each item and render them on the page
    * below the button
    */

function ParaElement([]) {
    return
}

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    let paraelement;



    return (
        <div>
            <button onClick={e => {
                const thingsArrayLength = thingsArray.length
                thingsArray.push("Things ".concat(thingsArrayLength + 1))
                paraelement = thingsArray.map((thing) => {
                    return <p
                        key={thing}
                        className='paragraph'>
                        {thing}
                    </p>
                })
                // console.log(thingsArray)

            }}>Add Item</button>
            <div>
                {paraelement}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));