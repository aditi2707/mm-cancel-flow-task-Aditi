'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";


export default function SubsCancelJobFoundByMM() {

  const router = useRouter();
  type StepView = "step-3" | "step-3-yes" | "step-3-no";
  const [view, setView] = useState<StepView>("step-3");

  const handleCancellation = () => {
    if (view === "step-3-yes") {
      router.push("/subscription-cancel/job-found/help-visa-no");
    } else {
      router.push("/subscription-cancel/job-found/help-visa-yes");
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


            {/* Header for step 3 */}

            {view === "step-3" && (
            <div className="flex">
                <p className="text-gray-700 mr-5" style={{"fontFamily": "Arial", "fontSize": "15px", "fontWeight": "bold"}}>
                Subscription Cancellation
                </p>
                
                <div className="flex gap-2 items-center">
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-gray-500 text-white flex items-center justify-center"></div>
                </div>
                
                <p className="text-gray-500 mx-2" style={{"fontFamily": "Arial", "fontSize": "15px"}}>
                Step 3 of 3
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


            {/* Left column for step 3 */}

            {view.startsWith("step-3") && (
            <div className="col-span-3">
                <p className="leading-none m-0 text-gray-800" style={{"fontSize": "40px"}}>
                    <b>
                        We helped you land the job, now let's help you secure your visa.
                    </b>
                </p> 
                
                <br></br>

                <p>
                  Is your company providing an immigration lawyer to help with your visa?
                </p>

                {view !== "step-3-no" && (
                <label className="flex items-center space-x-2">
                <input
                type="radio"
                name="step-3-options"
                value="step-3-yes"
                checked={view === "step-3-yes"}
                onChange={(e) => setView(e.target.value as StepView)}
                className="form-radio text-blue-500"
                />
                <span>Yes</span>
                </label>
                )}
                
                {view !== "step-3-yes" && (
                <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name="step-3-options"
                    value="step-3-no"
                    checked={view === "step-3-no"}
                    onChange={(e) => setView(e.target.value as StepView)}
                    className="form-radio text-green-500"
                />
                <span>No</span>
                </label>
                )}

                {/* Main left column after selecting yes */}

                {view === "step-3-yes" && (
                <div className="col-span-3">

                    <p>
                    What visa will you be applying for?
                    </p>
                    <label className="flex items-center space-x-2">
                    <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                    />
                    </label>

                </div>
            
                )}

            {/* Main left column after selecting no */}

            {view === "step-3-no" && (
            <div className="col-span-3">
                <p className="leading-none m-0">
                We can connect you with one of our trusted partners.<br></br>
                Which visa would you like to apply for?*
                </p>
                <label className="flex items-center space-x-2">
                <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                 />
                </label>

            </div>
            
            )}

                <br></br>

                <hr className="text-gray-300 my-5"></hr>

                <button onClick={handleCancellation} className="w-full bg-gray-300 text-gray-500 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                    Complete Cancellation
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