
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
    return (
        <header className="header raleway">
            <nav className="nav border rounded p-4 flex">
                <span><img className="nav-logo" src="./react-logo.png" /></span>
                <h3>RT-Dev</h3>
                <h4>React Course - Project 1st</h4>
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <main>
            <h1>Fun Facts about React.</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
function Footer() {
    return (
        <div>
            <footer className="footer">
                <small className="raleway">© 2024 RT-Dev development. All rights reserved.</small>
            </footer>
        </div>
    )
}
function Page() {
    return (
        <div className="m-3 p-3 border rounded shadow">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))