/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// import React from "react"
// import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <div>
                <header>
                    <nav>
                        <img src="./react-logo.png" width={40} height={40} />
                        <h1>React Challenge 3 Part 2</h1>
                    </nav>
                </header>
            </div>
            <div>
                <ol>
                    <li>It's a popular library, so I'll be
                        able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                        if I know React</li>
                </ol>
            </div>
            <div>
                <footer>
                    <center><em>© 2024 Accient React Development. All rights reserved."</em></center>
                </footer>
            </div>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.render(navPage, document.getElementById("nav"))
// ReactDOM.render(PageContent, document.getElementById("nav"))