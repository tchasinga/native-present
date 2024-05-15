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
       <div className="flex flex-col">
            <p className="text-slate-900">This is the first week of the program, we will have an introduction call and welcome you to the program</p>
            <p className="text-slate-900">And You&apos;ll be initiate to installation of IDE that you&apos;ll use during the program</p>
            <p className=""></p>
       </div>
    </div>
  )
}
