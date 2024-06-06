
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
        <header className="header">
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
function MainContent() {
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-lg font-bold">Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}
function Footer() {
    return (
        <footer className="text-sm p-4 border rounded">
            <small>© 2024 RT-Dev development. All rights reserved.</small>
        </footer>
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