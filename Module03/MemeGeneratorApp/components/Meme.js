import React from "react";
import memeData from "./MemeData"

export default function Meme() {
    let url = 'http://i.imgflip.com/1bij.jpg';
    let [memeImage, setMeme] = React.useState({
        toptext: "",
        bottomtext: "",
        randomImage: url
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function LoadImage() {
        const lenthof = allMemeImages.data.memes.length;
        url = allMemeImages.data.memes[Math.floor(Math.random() * lenthof)].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        // console.log(url)

    }
    return <main className="form-main">
        <div className="form">
            <input className="form-input" placeholder="Top Text" type="text"></input>
            <input className="form-input" placeholder="Bottom Text" type="text"></input>
            <img className="meme-image" src={memeImage.randomImage} />
            <button className="form-button" onClick={LoadImage}>Get a new Meme Image 🖼</button>
        </div>
    </main>
}