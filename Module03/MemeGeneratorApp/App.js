import React, { useEffect } from "react"
import NavBar from "./components/NavBar"
import Meme from "./components/Meme"

export default function App() {
    // function handelClick() {
    //     console.log("I was Click")
    // }
    return <div className="testdiv">
        <NavBar />
        <Meme />
        {/* <img onMouseOver={e => console.log("onMousseOver event")} onScroll={e => console.log("onScroll Event")} className="testimg" src="https://picsum.photos/640/360" />
        <button onClick={handelClick}>Click me</button> */}
    </div>
}
