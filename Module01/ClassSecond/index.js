// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// JSX
const page = (
    <div className="border m-2 p-6 rounded shadow hover:bg-black">
        <h1 className="text-3xl font-bold text-zinx-500 hover:text-white" >History of Civilization</h1>
        <p className="text-lg mt-2 hover:text-white">
            Mesopotamia (c. 3500–500 BCE): Often called the cradle of civilization,
            it was home to the Sumerians, Akkadians, Babylonians, and Assyrians.
            They developed writing (cuneiform), the wheel, and early forms of
            government and law.
        </p>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))