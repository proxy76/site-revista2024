import faqData from '../assets/data'

import { motion } from 'framer-motion'

function Chat() {

    const fadeInAnimationVariants1 = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
            }
        },
    }

    const fadeInAnimationVariants2 = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
            }
        },
    }

    return (
        <div className='chat'>
            <div className="contribute">
                <h1>Vrei să împărtășești ceva cu comunitatea?</h1>

                {
                    faqData.map(chat => {
                        if (chat.class === "pl") {
                                return (
                                    <motion.p 
                                    variants={fadeInAnimationVariants1}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    className={chat.class}
                                    >
                                        {chat.text}
                                    </motion.p>
                                )
                            }
                         else {
                            return (
                                <motion.p 
                                variants={fadeInAnimationVariants2}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                className={chat.class}>
                                    {chat.text}
                                </motion.p>
                            )
                        }
                            
                    })
                }
            
            </div>
        
            <div className="divider-container">
                <img src="./divider.png" />
            </div>
    </div>
    )
}

export default Chat;