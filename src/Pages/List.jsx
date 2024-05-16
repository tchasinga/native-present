import myList from "../Utils/Datalist"
import { motion } from "framer-motion"

export default function List() {

    const variants = {
        visible : {
          opacity: 1,
          x: 0,
          // transition : {type: "spring", stiffness: 100, damping:100},
          transition : {staggerChildren: 1}
        },
        hidden:{opacity : 0},
      }

  return (
    <div className="flex flex-col pt-20 ">  
        <h1 className="text-slate-900 text-5xl font-medium uppercase pb-4 ">the general police of this program</h1>
         {
            myList.map((getData)=> (
                <motion.div className="pl-3 flex gap-4 items-center" key={getData.id}
                initial="hidden" animate="visible" variants={variants}
                >
                    <div className="bg-slate-700 hover:bg-green-800 duration-1000 cursor-pointer w-10 h-10 rounded-full m-1 flex justify-center items-center">
                    <h1 className="text-white font-medium cursor-pointer">{getData.myName[0]}</h1>
                    </div>
                    <div className="">
                    <h1>{getData.myName}</h1>
                    </div>
                </motion.div>
            ))
         }
    </div>
  )
}
