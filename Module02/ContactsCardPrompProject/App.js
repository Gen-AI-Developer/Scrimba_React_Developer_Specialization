import React from "react"
import Contact from "./components/Contact"

function App() {
    return (
        <div className="contacts">

            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                contact="(212) 555-1234"
                mail="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                contact="(212) 555-2345"
                mail="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                contact="(212) 555-4567"
                mail="thecat@hotmail.com"
            />
            <Contact
                img="./images/pumpkin.png"
                name="Pumpkin King"
                contact="(0316) 091 KING"
                mail="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App