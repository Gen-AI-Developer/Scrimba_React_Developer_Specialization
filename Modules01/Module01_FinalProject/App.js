

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
                    <img className="img" src="./profile-img.jpg" />
                    <div>Safdar Ali Shah</div>
                    <div>Full Stack Developer</div>
                    <div>programmersafdar@live.com</div>
                    <div>
                        <button>Email</button>
                        <button>LinkedIn</button>
                    </div>
                </div>

            </div>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))