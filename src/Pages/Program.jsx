
import { AiFillAndroid } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaFilePdf , FaNodeJs} from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'animate.css';
 import { IoIosArrowRoundForward } from "react-icons/io";
 import { Tooltip } from "@mui/material";

export default function Program() {
  return (
     <div className="flex flex-col pb-16 w-full p-5">
       <h1 className="text-5xl text-slate-900 font-semibold">Roadmap  of the program</h1>
       <hr className="w-28 " />

       {/* First week of the program */}

       <div className="flex flex-col py-3">
        <h3 className="font-bold text-slate-900">Introduction and welcome call</h3>
        <h4 className="text-sm font-medium decoration-dashed">First week :</h4>
       </div>
       {/* Details */}
       <div className="flex flex-col ">
            <p className="text-slate-900">This is the first week of the program, we will have an introduction call and welcome you to the program</p>
            <p className="text-slate-900">And You&apos;ll be initiate to installation of IDE that you&apos;ll use during the program... it will be really helpful</p>
            <p className="text-slate-900">Right After installation you&apos;ll given a <strong>crush course of 07 hours long</strong> and PDF of 150 pages</p>
            <div className="pt-3">
                <p className="text-red-900">By the end of this first week you&apos;ll able to create an ANDROID & IOS APP</p>
            </div>
       </div>
       {/* Installation of IDE */}
       <div className="pt-5">
              <h3 className="font-bold text-slate-900">Installation of IDE</h3>
                <h4 className="text-sm font-normal decoration-dashed">Each of them has a direct link just click it </h4>
              <div className="pt-3">
                <p className="text-slate-900 pb-3 font-bold">You will need to install the following IDE to be able to follow the program</p>
                <ul className="flex items-center gap-5">
                <Tooltip title="click here to download me"  arrow placement='bottom'>
                  <li className="text-slate-900">
                    <a href="https://developer.android.com/studio" target="_blank" rel="noreferrer">
                      <AiFillAndroid className="text-3xl text-green-900 "/>
                      <p className="text-xs cursor-pointer">Android studio</p>
                    </a>
                  </li>
                  </Tooltip>
                  <Tooltip title="click here to download me"  arrow placement='bottom'>
                  <li className="text-slate-900">
                    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                      <VscVscode className="text-3xl text-blue-900 "/>
                      <p className="text-xs cursor-pointer">Vs code</p>
                    </a>
                  </li>
                  </Tooltip>
                  <Tooltip title="click here to download me"  arrow placement='bottom'>
                  <li className="text-slate-900">
                    <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noreferrer">
                      <FaJava className="text-3xl text-red-900 "/>
                      <p className="text-xs cursor-pointer">SDK Java</p>
                    </a>
                  </li>
                  </Tooltip>
                  <Tooltip title="click here to download me"  arrow placement='bottom'>
                  <li className="text-slate-900">
                    <a href="https://lodejs.org/en/download/current" target="_blank" rel="noreferrer">
                      <FaNodeJs className="text-3xl text-green-900 animate__animated "/>
                      <p className="text-xs cursor-pointer">NodeJs</p>
                    </a>
                  </li>
                  </Tooltip>
                </ul>
              </div>
       </div>
       {/* The program video tutorial and Pdf */}
         <div className="pt-3">
         <h3 className="font-bold text-slate-900">The program video tutorial and Pdf</h3>
                  <div className="p">
                 <p className="text-slate-900 pb-3 font-normal">You will need to download those two resource</p>
                 <ul className="flex items-center gap-5">
                 <Tooltip title="click here to download me"  arrow placement='bottom'>
                    <li className="text-slate-900">
                      <a href="https://mega.nz/file/NEgRTRTQ#UxtAZMwTau-2lOghemXyk9hIrZ6kJUue83GhjWWBVU4" target="_blank" rel="noreferrer">
                         <MdSlowMotionVideo className="text-3xl text-red-900 "/>
                         <p className="text-xs cursor-pointer">Video tutorial</p>
                      </a>
                    </li>
                    </Tooltip>
                    <Tooltip title="click here to download me"  arrow placement='bottom'>
                    <li className="text-slate-900">
                      <a href="https://mega.nz/file/FNZVCbAC#02xqjsuy-JTC9VmAb_I51EFkLY2pdImZ8pqsDMV-X5M" target="_blank" rel="noreferrer">
                         <FaFilePdf className="text-3xl text-blue-900 "/>
                         <p className="text-xs cursor-pointer">Pdf to read</p>
                      </a>
                    </li>
                    </Tooltip>
                 </ul>
                 </div>
         </div>

         <div className="py-10 justify-center">
            <div className="flex flex-col justify-center">
            <h3 className="text-2xl text-slate-900 font-semibold">Second week of the program...</h3>
            <h4 className="text-sm font-normal decoration-dashed">Second week :</h4>
            <hr className="w-32"/>
            </div>
            <div className="flex flex-col justify-center pt-5">
                <p className="text-slate-900">In this second part week we are going to drive deep in react-native by creating a full-stack app</p>
                <p className="text-slate-900">All  the teams will  work only on frontend using React-native, and all the needed APIs will be ready</p>
                <p className="text-slate-900">All the APIs will be provided by me and deployed before to be used :</p>
                <h4 className="text-sm font-semibold text-slate-900 decoration-dashed py-2">Project description :</h4>
                <p className="text-slate-900">You will be able to create a full-stack app with a login and a signup page</p>
                <p className="text-slate-900">The user must to the <strong>the CRUD operation</strong> on his user pages after login into it </p>
                <p className="text-slate-900">The user should be able to make login or signup with his google account...</p>
                <p className="text-slate-900">The user must be able to update his own information such as name etc...</p>  

        
        
          <Link to={"/apipages"} className="flex items-center gap-2 py-3 p-2 w-1/4 w-full">
            <h4 className="text-sm font-semibold text-slate-900 decoration-dashed leading-none cursor-pointer hover:text-lime-700 duration-500">Get all APIs</h4>
            <IoIosArrowRoundForward className="animate__animated  animate__fadeInLeft text-2xl"/>
          </Link>                      
            </div>
         </div>

         {/* Thirty week... */}
         <div className="flex flex-col">
            <h3 className="text-2xl text-slate-900 font-semibold">Thirty week of the program...</h3>
            <h4 className="text-sm font-normal decoration-dashed">Thirty week :</h4>
            <hr className="w-32"/>
            <div className="flex flex-col text-slate-900 p-2">
                <p>This part will  be more focus on creating another new app once again it gonna be a full-stack app</p>
                <p>This time we will focus on two part all  needed information will be provided in the project description...</p>
            </div>
            <div className="">
                <h1 className="text-slate-900 font-semibold">Project description</h1>
                <div className="flex flex-col p-3">
                    <p>This projects will two part , the first part which is admin will be done by using Reactjs or Nextjs</p>
                    <p className="">The main purpose the admin page will be to adding news information such as name of the event</p>
                    <p className="">Description of the event and including image, and about the backend all the APIs will provided by me</p>
                    <p className="">And the react-native will be used to display all the the information comes from the APis of admin panel</p>
                  <div className="py-3">
                  <p className=""><strong>Note :</strong> Remember your purpose is will be to stay focus on react-native part , about the backend part</p>
                  <p className="">I&apos;ll take personally the charge and provided all needed APIs for your training</p>
                  </div>
                </div>
            </div>
         </div>

         <div className="flex flex-col">
         <h3 className="text-2xl text-slate-900 font-semibold">Last week of the first part of this program...</h3>
            <div className="text-slate-900 py-3">
                <p>This will used to make a general review of the first month of this program and we are going to talk deeply</p>
                <p className="">About how we gonna manage to works on the final CAPSTONE PROJECT which will takes one month in total</p>
            </div>
         </div>
    </div>       
  )
}

