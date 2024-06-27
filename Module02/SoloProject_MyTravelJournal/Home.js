import React from "react";
import NavBar from "./Components/NavBar";
import data from "./data";
import Card from "./Components/Card"
export default function Home() {
    return <div>
        <NavBar />
        <Card
            key={data.id}
            items={data}
        />
    </div>
}