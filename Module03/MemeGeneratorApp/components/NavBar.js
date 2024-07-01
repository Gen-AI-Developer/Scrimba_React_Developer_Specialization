import React from "react";

export default function NavBar() {
    return <header>
        <nav>
            <div className="nav">
                <div className="div-logo-name">
                    <img className="nav-logo" src="./images/troll-face.png"></img>
                    <h2 className="logo-text">Meme Generator</h2>
                </div>
                <h3 className="nav-project-text">React Course - Project 3</h3>
            </div>
        </nav>
    </header>
}