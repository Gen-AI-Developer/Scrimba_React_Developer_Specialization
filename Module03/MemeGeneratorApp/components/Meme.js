import React from "react";
import memeData from "./MemeData"

/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

export default function Meme() {
    let url = 'http://i.imgflip.com/1bij.jpg';
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
            <button className="form-button" onClick={LoadImage}>Get a new Meme Image 🖼</button>
        </div>
    </main>
}