import React from 'react'

export default function Jokes(props) {
    return (
        <div>
            {props.setup && <div><h1>Setup: {props.setup}</h1></div>}
            <div><h4>Punchline: {props.punchline}</h4></div>
            <hr />
        </div>
    )
}
