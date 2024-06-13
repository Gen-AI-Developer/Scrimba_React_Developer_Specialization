/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const Page = (
    <div className="bg-white rounded p-4">

        <img src="./react-logo.png" height={40} width={40} />
        <div className="m-7 p-1">
            <div className="mb-3 ml-3">
                <h1 className="text-lg font-bold italic">Fun Facts about React</h1>
            </div>
            <div className="border p-8 rounded shadow">
                <ul className="list-disc text-md ">
                    <li>Was First release in 2013</li>
                    <li>Was Originally created b Jordan Walke</li>
                    <li>Has Well over 100k stars on Github</li>
                    <li>Is Maintained by Facebook</li>
                    <li>Powers thousand of enterprise application</li>
                    <li>Is Very at Production</li>
                </ul>
            </div>

        </div>
    </div>

)
ReactDOM.render(Page, document.getElementById("nav"))
// ReactDOM.render(PageContent, document.getElementById("nav"))