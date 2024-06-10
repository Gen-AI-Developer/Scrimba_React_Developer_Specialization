

function Header() {
    return (
        <div>header</div>
    )
}
function Footer() {
    return (
        <div>Footer</div>
    )
}


function App() {
    return (
        <div className="main--container">
            <div className="first-div">
                <div className="main--content">
                    <div className="img-div">
                        <img className="img" src="./profile-img.jpg" />
                    </div>
                    <div className="detial-content">
                        <div className="text-name">Safdar Ali Shah</div>
                        <div className="text-job">Full Stack Developer</div>
                        <div className="text-email">programmersafdar@live.com</div>
                        <div className="buttons">
                            <button className="email-button">Email</button>
                            <button className="linkedin-button">LinkedIn</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))