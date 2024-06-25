import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


{/* <img src="./images/katie-zaferes.png" className="card--img" />
<div className="card--status" >
    <img className="card--star" src="./images/star.png" />
    <span>5.0</span>
    <span className="gray">(6) • </span>
    <span className="gray">USA</span>
</div>
<p>Life Lesson with Katie Zaferes</p>
<p><span className="bold">From $136</span> / person</p> */}

export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="divdiv">
                <Card
                    img="./images/katie-zaferes.png"
                    rating="5.0"
                    reviewCount="6"
                    country="Pakistan"
                    title="Life Lessons with Katie Zaferes"
                    price="136"

                />
                <Card
                    img="./images/katie-zaferes.png"
                    rating="5.0"
                    reviewCount="6"
                    country="Pakistan"
                    title="Life Lessons with Katie Zaferes"
                    price="136"

                />
                <Card
                    img="./images/katie-zaferes.png"
                    rating="5.0"
                    reviewCount="6"
                    country="Pakistan"
                    title="Life Lessons with Katie Zaferes"
                    price="136"

                />
            </div>
        </div>
    )
}