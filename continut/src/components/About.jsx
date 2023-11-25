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
            y: 100,
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
        <div className="wrapper">
            
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
                once: false,
            }}
            className="revista-container">
                <h1>EDIȚIA 2023</h1>
                <motion.img 
                //ref={targetRef}
                //style={{scale}}
                src="./coperta.png" alt="" />
                <p>Descărcați revista în varianta digitală</p>
            </motion.div>

            <div className="divider-container">
                <img src="./divider.png" />
            </div>

            <div className="contribute">
                <h1>Vrei să impărtășești ceva cu comunitatea?</h1>
                <p className="pl">Dacă da, poți avea un rol important în tehnoredactarea revistei de anul acesta.</p>
                <p className="pr">Cum?</p>
                <p className="pl">Fă research despre un anumit subiect care se încadrează în categoriile revistei și realizează un articol în Word, eventual însoțit de poze.</p>
                <p className="pr">Care sunt categoriile de anul acesta?</p>
                <p className="pl">
                    <div className="contribute-categorii">
                        <ul>
                            <li>File de litertură</li>
                            <li>File de știință</li>
                            <li>Dincolo de învățătură</li>
                            <li>Colțul talentelor</li>
                        </ul>
                    </div>
                </p>
                <p className="pr">Am libertate totală de exprimare?</p>
                <p className="pl">Este recomandată originalitatea, însă subiectul trebuie să fie încadrat în categoriile date.</p>
                <p className="pr">De unde știu că articolul nu a fost deja abordat?</p>
                <p className="pl">TABEL DE ADAUGAT!!</p>
                <p className="pr">Pot să scriu cu un prieten?</p>
                <p className="pl">Da, poți să scrii împreună cu un prieten. Totuși, te rugăm să nu faci grupe de mai mult de 2 persoane, pentru a pune în valoare contribuția fiecărui autor!</p>
            </div>
            
            <div className="divider-container">
                <img src="./divider.png" />
            </div>

        </div>
    )
}