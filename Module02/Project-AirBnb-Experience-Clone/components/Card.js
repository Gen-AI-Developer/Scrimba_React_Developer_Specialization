import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(promps) {
    let badgetext
    if (promps.openspots === 0) {
        badgetext = "SOLD OUT"
    }
    else if (promps.location === "Online")
        badgetext = "ONLINE"
    return (
        <div className="">
            <div className="card">
                {badgetext && <div className="card--bagde">{badgetext}</div>}
                <img src={promps.img} className="card--img" />
                <p className="card--title">{promps.title}</p>
                <p className="card--para"><span className="bold">From ${promps.price}</span> / person</p>
                <div className="card--status" >
                    <img className="card--star" src="./images/star.png" />
                    <span>{promps.rating}</span>
                    <span className="gray">-({promps.reviewCount}) • </span>
                    <span className="gray">{promps.location}</span>
                </div>
                <div className="card-btn-div">
                    <button className="card--btn">View More!</button>
                </div>

            </div>
        </div>
    )
}