import React from "react";
import NavBar from "./Components/NavBar";
import data from "./data";
import Card from "./Components/Card"
import Footer from "./Components/Footer"


export default function Home() {
    let CardElement = data.map((data) => {
        return <Card
            key={data.id}
            title={data.title}
            description={data.description}
            googlemapurl={data.googleMapsUrl}
            img={data.imageUrl}
            startDate={data.startDate}
            endDate={data.endDate}
            location={data.location}
        />
    })

    // console.log(CardElement)
    return <div className="viewport">
        <NavBar />
        <div className="divdiv">
            {CardElement}
        </div>
        <Footer />
    </div>
}