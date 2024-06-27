import React from "react";
import NavBar from "./Components/NavBar";
import data from "./data";
import Card from "./Components/Card"
export default function Home() {
    const CardElement = data.map((data) => {
        return <Card
            
        />
    })
    return <div>
        <NavBar />
    </div>
}