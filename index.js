// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// JSX
const page = (
    <div>
        <h1>This is title of Paragraph</h1>
        <p>
            Mesopotamia (c. 3500–500 BCE): Often called the cradle of civilization,
            it was home to the Sumerians, Akkadians, Babylonians, and Assyrians.
            They developed writing (cuneiform), the wheel, and early forms of
            government and law.
        </p>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))