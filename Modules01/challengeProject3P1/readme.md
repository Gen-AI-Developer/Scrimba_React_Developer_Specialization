/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import React from 'react'
import ReactDOM from 'react-dom'
function CustomComponent(){
    return (
        <div>
        <h1>Reason why i love React</h1>
        <ol>
        <strong>
        <em>
        <li>Productive</li>
        <li>Easy to Learn</li>
        <li>Fast</li>
        <li>Develop</li>
        </em>
        </strong>
        </ol>
        </div>
    )
}
ReactDOM.render(<CustomComponent/>,document.getElementById('root'))