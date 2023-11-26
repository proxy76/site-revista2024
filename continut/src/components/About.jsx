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
                delay: 0.5,
            }
        },
    }

    return (
        <div className="about">
            
            <div className="info">
                <h1>INFORMAȚII</h1>
            </div>

            <div className="photo-container">
                <img src="./iconAbout.png" alt="" className="about-img" />
            </div>
            
            <div className="divider-container">
                <img src="./divider.png" />
            </div>

            <motion.div ref={targetRef} style={{opacity, scale}} className="about-text">
                <h1>DESPRE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim dolore! Repellendus veniam commodi unde quod illo id dignissimos possimus nisi recusandae harum voluptatum repudiandae similique deleniti deserunt, eum, corrupti vitae fuga dolores, magni consequuntur? Aliquam quas reprehenderit aspernatur neque voluptate totam perferendis eum eos debitis ullam. Ipsam, recusandae ducimus.</p>
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
                <a href='../assets/Carte4.pdf' download>Descărcați revista în varianta digitală</a>
            </motion.div>

            <div className="divider-container">
                <img src="./divider.png" />
            </div>

        </div>
    )
}