import React from "react";
import memeData from "./MemeData"
export default function Meme() {
    let url = '';
    let [memeImage, setMemeImage] = React.useState(url);

    function getRandomInt(max) {

        return Math.floor(Math.random() * max);
    }

    function LoadImage() {
        const lenthof = memeData.data.memes.length;
        const randValue = getRandomInt(lenthof)
        setMemeImage(memeData.data.memes[randValue].url)

        // console.log(url)

    }
    return <main className="form-main">
        <div className="form">
            <input className="form-input" placeholder="Top Text" type="text"></input>
            <input className="form-input" placeholder="Bottom Text" type="text"></input>
            <img className="meme-image" src={memeImage} />
            <button onClick={LoadImage}>Get a new Meme Image 🖼</button>
        </div>
    </main>
}