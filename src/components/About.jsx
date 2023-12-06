import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function About() {

    
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1])
    
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1,
            }
        },
    }

    return (
        <div className="about">
            
            <div className="info">
                <h1>DETALII</h1>
            </div>

            <div className="photo-container">
                <img src="./iconAbout.png" alt="" className="about-img" />
            </div>
            
            <div className="divider-container">
                <img src="./divider.png" />
            </div>

            <div className="aboutSection">
                
                <motion.div ref={targetRef} style={{opacity, scale}} className="about-text">
                    <h1>DESPRE</h1>

                    <p>"Perspective" oferă o călătorie captivantă prin gândurile și visurile elevilor, îmbogățind în acest fel comunitatea cu o panoramă vibrantă a imaginației mulțimii elevilor din Colegiul Național "Nicolae Grigorescu". </p>

                    {/* <div className="carusel">
                        <span>Privire generală &#x2022; Fel particular de a vedea lucrurile &#x2022; Puncte de vedere &#x2022; Ceea ce se întrevede ca fiind posibil în viitor &#x2022; Anul 2001 - apare primul număr &#x2022; Anul 2024 - va apărea numărul 27</span>
                    </div> */}

                    
                </motion.div>
                <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                className="revista-container">
                    <h1>EDIȚIA 2023</h1>
                    <motion.img
                    //ref={targetRef}
                    //style={{scale}}
                    src="./coperta.png" alt="" />
                    <a href='./RevistaPerspective2023.pdf' className="regBtn" download="RevistaPerspective2023.pdf">Descărcați revista în varianta digitală</a>
                </motion.div>
            </div>
            
            <div className="divider-container">
                <img src="./divider.png" />
            </div>

        </div>
    )
}