import React from "react";
function Contact({ img, name, contact, mail }) {

    // console.log(props)

    return (
        <div className="">
            <div className="contact-card">
                <img src={img} />
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{contact}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{mail}</p>
                </div>
            </div>
        </div>
    )
}
export default Contact