import { useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function IntroText({takeToContribute}) {

    const [textWidth, setTextWidth] = useState(100)

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.8])

    return (
        <motion.div 
        ref={targetRef}
        style={{opacity, scale}}
        className="intro-text">
            <h2>
                Descoperă lumile noi prin
            </h2>
            <h1>PERSPECTIVE</h1>

            <button className="button" onClick={() => {
                setTextWidth(200);
                takeToContribute();
            }} >
                Află cum poți contribui!
            </button>

        </motion.div>
    )
}

export default function Intro({takeToContribute}) {
    return (
        <div className="intro">
            <IntroText takeToContribute={takeToContribute} className="intro-text" />
            <div className="intro-color-mask"/>
            <img className="intro-bgimg" src="./coperta1.png" />
        </div>
    )
}
