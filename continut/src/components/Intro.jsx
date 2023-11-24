import { useState } from "react"

function IntroText() {

    const [textWidth, setTextWidth] = useState(100)

    return (
        <div className="intro-text">
            <h2>
                Descoperă lumile noi prin
            </h2>
            <h1>PERSPECTIVE</h1>

            <button onClick={() => {
                setTextWidth(200)
            }} style={{ width: textWidth }}>
                Află cum poți contribui!
            </button>

        </div>
    )
}

export default function Intro() {
    return (
        <div className="intro">
            <IntroText className="intro-text" />
            <div className="intro-color-mask"/>
            <img className="intro-bgimg" src="./coperta1.png" />
        </div>
    )
}
