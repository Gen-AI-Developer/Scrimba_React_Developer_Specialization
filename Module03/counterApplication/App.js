import React from "react"

export default function App() {

    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    let [count, setCount] = React.useState(3)
    function add() {
        setCount(preCount => preCount + 1)
    }
    function sub() {
        setCount(preCount => preCount - 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub} onTouchStart={sub}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
