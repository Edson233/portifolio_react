import { motion, useTransform, useScroll } from "framer-motion";
import "./cicle.css"



export const Cicle = () => {
    const { scrollYProgress } = useScroll()

    const rotation = useTransform(
        scrollYProgress,
        [0 , 0.97 , 1],
        [90, 610, 720]
    )

    return (
        <motion.div className="cicle-container">            
            <motion.div className="cicle" style={{
                rotate : rotation,
            }}> 
                <div className="night">
                    <div className="night-center">
                        <div className="moon"  > </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-center">
                        <div className="sun" > </div>
                    </div>
                </div>
            </ motion.div>


        </motion.div>
    )
}
