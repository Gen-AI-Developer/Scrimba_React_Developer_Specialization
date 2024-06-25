/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/
import React from "react";
import ReactDOM from "react-dom"
import Joke from "./components/jokes";

export default function App() {
  return <div>
    <Joke
      setup="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she opens it."
    />
    <Joke
      setup="How did the hacker escape the police?"
      punchline="He just ransomware!"
    />
    <Joke
      setup="Why don't pirates travel on mountain roads?"
      punchline="Scurvy."
    />
    <Joke
      setup="Why do bees stay in the hive in the winter?"
      punchline="Swarm."
    />
    <Joke
      setup="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"
    />
  </div>
}
ReactDOM.render(<App />, document.getElementById('root'))