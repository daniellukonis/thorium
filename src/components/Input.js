import axios from "axios"
import { textMatchAll, normalizeRegExp } from "../helpers"

function Text ({ text, setText }) {

  function handleChange (evt) {
    setText(evt.target.value)
  }

  async function newJoke () {
    const joke = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt')
    setText(joke.data)
  }

  return (
    <div className="regexp-component">
      <label className="label" onClick={newJoke}>Input Text <sub>click for new joke</sub></label>
      <textarea rows='5' placeholder={ text } className='input' onChange={handleChange}></textarea>
    </div>
  )
}

export { Text }
