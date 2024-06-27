import React from "react";
export default function Card(props) {
    return (
        <div className="card">
            <div> <img className="card-img" src={props.img} /></div>
            <div>
                <div className="card-locmap">
                    <img src="./images/locationicon.png" /> <span className="card-location">{props.location}</span>
                </div>
                <h1 className="card-title">{props.title}</h1>
            </div>
        </div>
        // <h1>{props.title}</h1>
        // <h1>{props.location}</h1>
        // <h1>{props.description}</h1>
        // <h1>{props.googlemapurl}</h1>
        // <h1>{props.startDate}</h1>
        // <h1>{props.endDate}</h1>
    )
}