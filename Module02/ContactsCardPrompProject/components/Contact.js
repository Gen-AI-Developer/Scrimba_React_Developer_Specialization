import React from "react";
function Contact(props) {

    console.log(props)

    return (
        <div className="">
            <div className="contact-card">
                <img src={props.img} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.contact}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.mail}</p>
                </div>
            </div>
        </div>
    )
}
export default Contact