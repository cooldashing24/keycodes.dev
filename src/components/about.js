import React from 'react'
import { FaKeyboard } from "react-icons/fa";

const About = () => {
    return (
        <div className="about">
            <h1><FaKeyboard /> Keycodes</h1>
            <h2>What are key codes?</h2>
            <p>Key codes are numeric values that correspond to physical keys on the keyboard. With JavaScript, we can target these key codes and add events to them in our applications.</p>
            <p>A project by <a href="https://www.twitter.com/justinjunodev" target="_blank" rel="noopener noreferrer">@justinjunodev</a>. Contribute on <a href="https://github.com/justinjunodev/keycodes.dev" target="_blank" rel="noopener noreferrer">Github</a>.</p>
        </div>
    )
}

export default About
