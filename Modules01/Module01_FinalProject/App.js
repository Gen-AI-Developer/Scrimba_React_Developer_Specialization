

function Header() {
    return (
        <div className="first-div">
            <div className="">
                <div className="">
                    <img className="img" src="./profile-img.jpg" />
                </div>

            </div>

        </div>
    )
}
function Footer() {
    return (
        <div>
            <div className="footer">
                <img className="img-com-prop" src="twitter.png" />
                <img className="img-com-prop" src="facebook.png" />
                <img className="img-com-prop" src="instagram.png" />
                <img className="img-com-prop" src="github.png" />
            </div>
        </div>
    )
}

function MainContent() {
    return (

        <div>
            <div className="text-name">Safdar Ali Shah</div>
            <div className="text-job">Full Stack Developer</div>
            <div className="text-email">programmersafdar@live.com</div>
            <div className="buttons">
                <button className="email-button">Email</button>
                <button className="linkedin-button">LinkedIn</button>
            </div>
            <div>
                <div>About</div>
                <div>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
                <div>Interests</div>
                <div>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            </div>
        </div>
    )
}


function App() {
    return (
        <div className="main--container">
            <div className="main--content">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))