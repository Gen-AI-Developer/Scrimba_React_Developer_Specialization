import React from "react"
export default function Header() {
    return (
        <header className="header raleway">
            <nav className="nav border rounded p-4 flex">
                <span><img className="nav-logo" src="./react-logo.png" /></span>
                <h1>RT-Dev</h1>
                <ol className="nav-list-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </nav>
        </header>
    )
}