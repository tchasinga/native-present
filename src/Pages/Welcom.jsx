import { containerVariant } from "../Utils/animation.js"
import { motion } from "framer-motion"

export default function Welcom() {
  return (
    <motion.div 
    initial="offscreen"
    whileInView={"onscreen"}
    variants={containerVariant()}
    className="text-[90px] leading-none min-h-screen flex flex-col pt-28 font-bold w-full p-3">
       <h1 className="">Welcome to the roadmap</h1>
         <h1 className="">This is a roadmap to help you learn and master React-native</h1>
    </motion.div>
  )
}
