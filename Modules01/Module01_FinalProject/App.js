function Card() {
    return (
        <div className="card">
            <div className="profile">

            </div>
            <div className="v0_185">

            </div>
        </div>

    )
}

function Header() {
    return (
        <div>
            <div className="lead-txt">
                <span className="v0_201">Safdar Ali</span>
                <span className="v0_202">Full Stack Developer</span>
                <span className="v0_203">programmersafdar@live.com</span>
            </div>
            <div className="social-btns">
                <div className="name">

                </div>
                <span className="v0_229">Email</span>
            </div>
            <div className="v0_233">
                <div className="name">

                </div>
                <span className="v0_235">LinkedIn</span>
            </div>
        </div>

    )
}
function Footer() {
    return (
        <footer>
            <div className="footer-bg"></div>
            <div className="gh-logo"></div>
            <div className="twitter-logo"></div>
            <div className="insta-logo"></div>
            <div className="linkin-logo"></div>
        </footer>

    )
}

function Main() {
    return (
        <main>
            <div className="v0_196">
                <span className="v0_197">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</span>
                <span className="v0_198">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</span>
                <span className="v0_199">About</span>
                <span className="v0_200">Interests</span>
            </div>
        </main>
    )
}


function App() {
    return (
        <div className="container">
            <Card />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))