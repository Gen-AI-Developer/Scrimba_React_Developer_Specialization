import React from "react";
export default function Meme() {
    return <main className="form-main">
        <form className="form">
            <input className="form-input" placeholder="Top Text" type="text"></input>
            <input className="form-input" placeholder="Bottom Text" type="text"></input>
            <button>Get a new Meme Image 🖼</button>
        </form>
    </main>
}