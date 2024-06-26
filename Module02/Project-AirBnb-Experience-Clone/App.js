import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

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
    const cardElement = data.map((data_object) => {
        return <Card
            key={data_object.id}
            img={data_object.coverImg}
            rating={data_object.stats.rating}
            reviewCount={data_object.stats.reviewCount}
            location={data_object.location}
            title={data_object.title}
            price={data_object.price}
            openspot={data_object.openSpots}
        />
    })
    return (
        <div>
            <Nav />
            <Hero />
            <div className="divdiv">
                {cardElement}
            </div>
        </div>
    )
}