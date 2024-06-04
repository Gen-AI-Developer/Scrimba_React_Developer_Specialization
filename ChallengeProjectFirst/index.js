// Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now


const PageContent = (
    <div>
        <h1>this is other para</h1>
        <p>This is a lurem IPsum Para</p>
    </div>
)

const navPage = (
    <nav>
        <h1>Logistics</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navPage, document.getElementById("nav"))
// ReactDOM.render(PageContent, document.getElementById("nav"))