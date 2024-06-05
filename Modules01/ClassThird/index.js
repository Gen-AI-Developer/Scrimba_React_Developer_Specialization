import React from 'react'
import ReactDOM from 'react-dom/client'

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
// ReactDOM.render(page, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(page)
