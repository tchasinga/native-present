import { containerVariant } from "../Utils/animation"
import { motion } from "framer-motion"

export default function Policy() {
  return (
    <motion.div className="flex flex-col pt-16 min-h-full" 
    initial="offscreen"
    whileInView={"onscreen"}
    variants={containerVariant()}
    >
       <div className="flex items-center justify-center">
       <h1 className="text-slate-900 text-5xl font-medium uppercase ">the general police of this program</h1>
       </div>

        <div className="flex flex-col p-10">
            <h3 className="font-semibold">1. Meeting time</h3>
            <div className="flex flex-col pt-3 text-slate-900">
                <p>The only way to keep the teams moving forward is a communication so that&apos;s is highly require to all the teams to respect the meeting program</p>
                <p>The meeting time will be twice in week at <strong>Wednesday</strong> and at <strong>Friday</strong> at <strong>09:30 PM , West-Africa Standard Time</strong> </p>
            </div>

            <h3 className="font-semibold pt-4">2. Project presentation</h3>
            <div className="flex flex-col pt-3 text-slate-900">
                <p>The project presentation will  be a showcase where a teams member will  be called to present in live video the project that they&apos;ve done in teams</p>
                <p>This section is pretty much important coz it will help me to make an evaluation of my program and learn how to improve it...</p>
                <p className="">Based on your understanding,  thanks for your understanding...</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-slate-900 text-5xl font-medium uppercase ">the payment support</h1>
       </div>
        <div className="flex pt-5 flex-col text-slate-900">
            <p className="">The payment support is to help CEO of this program to keep maintaining the learning program and continuous to suggest more functionality </p>
            <p>To this program I&apos;m sure that program will have important resource for your training which is good for all of us</p>
        </div>
        <div className="flex flex-col py-3">
            <h1 className="font-semibold">Payment method : </h1>
            <p className="pt-2">All the payment support will sent to DIRECT <strong>VISA CARD</strong> the amount should be from 10$ up to 20$ according to your current</p>
            <p>Financial situation</p>
            <p><strong>VISA CARD NUMBER :</strong> <span className="text-green-900 uppercase font-semibold text-lg">xxxxxxxxxxxxxxxxxxx</span></p>

            <div className="py-3">
                <hr />
            </div>
        </div>
            <div className="flex flex-col">
                <p className="text-red-700 text-base">Note : the payment should be achieved right before the first week of this program... thanks</p>
            </div>
    </motion.div>
  )
}
