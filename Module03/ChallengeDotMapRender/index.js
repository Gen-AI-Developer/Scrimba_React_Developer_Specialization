import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../Module02/SoloProject_MyTravelJournal/data';
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
    let paraelement = thingsArray.map((index) => {
        return <p className='paragraph'>
            
        </p>
    })


    return (
        <div>
            <button onClick={e => {
                const thingsArrayLength = thingsArray.length
                thingsArray.push("Things ".concat(thingsArrayLength + 1))
                // console.log(thingsArray)

            }}>Add Item</button>
            <div>
                {paraelement}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));