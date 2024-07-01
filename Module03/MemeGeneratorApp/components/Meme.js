import React from "react";
export default function Meme() {
    return <main className="form-main">
        <form className="form">
            {/* <div className="form-div"> */}
            {/* <label>Top Text</label> */}
            <input className="form-input" placeholder="Top Text" type="text"></input>
            {/* <label>Bottom Text</label> */}
            <input className="form-input" placeholder="Bottom Text" type="text"></input>
            {/* </div> */}
            <button>Get a new Meme Image 🖼</button>
        </form>
    </main>
}