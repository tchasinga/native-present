
import { AiFillAndroid } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';


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
                <p className="text-red-900">Buy the end of this first week you&apos;ll able to create an ANDROID & IOS APP</p>
            </div>
       </div>
       {/* Installation of IDE */}
       <div className="pt-5">
              <h3 className="font-bold text-slate-900">Installation of IDE</h3>
                <h4 className="text-sm font-normal decoration-dashed">Each of them has a direct link just click it </h4>
              <div className="pt-3">
                <p className="text-slate-900 pb-3 font-bold">You will need to install the following IDE to be able to follow the program</p>
                <ul className="flex items-center gap-5">
                  <li className="text-slate-900">
                    <a href="https://developer.android.com/studio" target="_blank" rel="noreferrer">
                      <AiFillAndroid className="text-3xl text-green-900"/>
                      <p className="text-xs cursor-pointer">Android studio</p>
                    </a>
                  </li>
                  <li className="text-slate-900">
                    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                      <VscVscode className="text-3xl text-blue-900"/>
                      <p className="text-xs cursor-pointer">Vs code</p>
                    </a>
                  </li>
                  <li className="text-slate-900">
                    <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noreferrer">
                      <FaJava className="text-3xl text-red-900"/>
                      <p className="text-xs cursor-pointer">SDK Java</p>
                    </a>
                  </li>
                </ul>
              </div>
       </div>
       {/* The program video tutorial and Pdf */}
         <div className="pt-3">
         <h3 className="font-bold text-slate-900">The program video tutorial and Pdf</h3>
                  <div className="p">
                 <p className="text-slate-900 pb-3 font-normal">You will need to download those two resource</p>
                 <ul className="flex items-center gap-5">
                    <li className="text-slate-900">
                      <a href="https://mega.nz/file/NEgRTRTQ#UxtAZMwTau-2lOghemXyk9hIrZ6kJUue83GhjWWBVU4" target="_blank" rel="noreferrer">
                         <MdSlowMotionVideo className="text-3xl text-red-900"/>
                         <p className="text-xs cursor-pointer">Video tutorial</p>
                      </a>
                    </li>
                    <li className="text-slate-900">
                      <a href="https://mega.nz/file/FNZVCbAC#02xqjsuy-JTC9VmAb_I51EFkLY2pdImZ8pqsDMV-X5M" target="_blank" rel="noreferrer">
                         <FaFilePdf className="text-3xl text-blue-900"/>
                         <p className="text-xs cursor-pointer">Pdf to read</p>
                      </a>
                    </li>
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

        
        
          <Link to={"/apipages"}>
            <h4 className="text-sm font-semibold text-slate-900 decoration-dashed py-2">Get all APIs</h4>
          </Link>  
                              
            </div>
         </div>
    </div>       
  )
}
