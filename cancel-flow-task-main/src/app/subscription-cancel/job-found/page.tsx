'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function SubsCancelJobFound() {

  const router = useRouter();
  const [view, setView] = useState("step-1");
  const [selected, setSelected] = useState<string>("");

  const handleContinueStep2 = () => {
    if (selected === "yes") {
      router.push("/subscription-cancel/job-found/job-MM-yes");
    } else {
      router.push("/subscription-cancel/job-found/job-MM-no");
    } 
  };

  return (

    <div className="min-h-screen bg-gray-400 py-12 overflow-hidden">
      <div className="bg-white shadow rounded-xl mx-40 my-20">
        <div className="p-4 flex items-center justify-between">
            <a href="/subscription-cancel" style={{textDecorationColor: "gray"}} className="flex items-center text-blue-600 hover:underline text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
  
                <span className="text-base">Back</span>
            </a>

            {/* Header for step 1 */}
            
            {view === "step-1" && (
            <div className="flex">
                <p className="text-gray-700 mr-5" style={{"fontFamily": "Arial", "fontSize": "15px", "fontWeight": "bold"}}>
                Subscription Cancellation
                </p>
                
                <div className="flex gap-2 items-center">
                    <div className="w-6 h-2 rounded-full bg-gray-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-gray-300 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-gray-300 text-white flex items-center justify-center"></div>
                </div>
                
                <p className="text-gray-500 mx-2" style={{"fontFamily": "Arial", "fontSize": "15px"}}>
                Step 1 of 3
                </p>
            </div>
            )}

            {/* Header for step 2 */}

            {view === "step-2" && (
            <div className="flex">
                <p className="text-gray-700 mr-5" style={{"fontFamily": "Arial", "fontSize": "15px", "fontWeight": "bold"}}>
                Subscription Cancellation
                </p>
                
                <div className="flex gap-2 items-center">
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-gray-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-gray-300 text-white flex items-center justify-center"></div>
                </div>
                
                <p className="text-gray-500 mx-2" style={{"fontFamily": "Arial", "fontSize": "15px"}}>
                Step 2 of 3
                </p>
            </div>
            )}



            <button className="text-gray-500 hover:text-gray-800 float-right">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>
        </div>
        <hr className="text-gray-300"></hr>
        <div className="p-4">
          <div className="grid grid-cols-5 gap-4">

            {/* Left column for step 1 */}

            {view === "step-1" && (
            <div className="col-span-3">
                <p className="text-gray-800" style={{"fontSize": "40px"}}><b>Congrats on the new role!<span>🎉</span></b></p> 
                
                <br></br>

                <div>
                    <p>Did you find this job with MigrateMate?*</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <button onClick={() => setSelected("yes")} className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Yes
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setSelected("no")} className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            No
                            </button>
                        </div>
                    </div>
                </div>

                <br></br>


                <div>
                    <p>How many roles did you <u>apply</u> for through Migrate Mate?*</p>
                    <div className="grid grid-cols-4 gap-2">
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            0
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            1-5
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            6-20
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            20+
                            </button>
                        </div>
                    </div>
                </div>

                <br></br>

                <div>
                    <p>How many companies did you <u>email</u> directly?*</p>
                    <div className="grid grid-cols-4 gap-2">
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            0
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            1-5
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            6-20
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            20+
                            </button>
                        </div>
                    </div>
                </div>

                <br></br>

                <div>
                    <p>How many different companies did you <u>interview</u> with?*</p>
                    <div className="grid grid-cols-4 gap-2">
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            0
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            1-2
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            3-5
                            </button>
                        </div>
                        <div>
                            <button className="mt-5 w-full bg-gray-100 text-gray-500 px-4 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            5+
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="text-gray-300 my-5"></hr>

                <button onClick={() => setView("step-2")} className="w-full bg-gray-300 text-gray-500 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                    Continue
                </button>
            
            </div>
            )}



            {/* Left column for step 2 */}

            {view === "step-2" && (
            <div className="col-span-3">
                <p className="leading-none m-0 text-gray-800" style={{"fontSize": "40px"}}>
                    <b>
                        What's one thing you wish we could've helped you with?
                    </b>
                </p> 
                
                <br></br>

                <p>
                  We're always looking to improve, your thoughts can help us make Migrate 
                  Mate more useful for others.*
                </p>

                <br></br>

                <textarea rows={6} cols={40} 
                className="w-full  px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <hr className="text-gray-300 my-5"></hr>

                <button onClick={handleContinueStep2} className="w-full bg-gray-300 text-gray-500 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                    Continue
                </button>

            </div>
            
            )}


            <div className="col-span-2 flex items-center justify-center p-1">
                <img src="/images/empire-state-compressed.jpg" alt="Empire State Bldg" className="w-full h-full shadow-xl rounded-xl" />
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>




  );
}