import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
const About = () => {
    return (
        <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start  gap-[50px]' 
        id='about'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
                <motion.h1
                variants={slideUpVariants}
                className='text-yellow-500 text-2xl'>WELCOME TO</motion.h1>

                <motion.h1
                variants={slideUpVariants}
                className='text-white uppercase text-[40px] font-bold'>Prime Construction</motion.h1>
                
                <div className='w-[120px] h-[6px] bg-yellow-500'> </div>

                <p className="text-3xl italic text-gray-50 mt-[60px]">We are the leader with 25 years of experience in the construction market!</p>
 
            </motion.div>

            <motion.div>

            </motion.div>
        </div>
    )
}

export default About