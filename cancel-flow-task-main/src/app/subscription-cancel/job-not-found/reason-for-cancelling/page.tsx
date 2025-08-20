'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function SubsCancelJobNotFoundCancelReason() {

  const router = useRouter();
  type StepView = "step-3" | "step-3-too-expensive" | "step-3-platform-not-helpful" 
                | "step-3-not-enough-relevant-jobs" | "step-3-decided-not-to-move" 
                | "step-3-other";
  const [view, setView] = useState<StepView>("step-3");
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

            {/* Header for step 3 */}

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

            <div className="col-span-3">
                <p className="leading-none m-0 text-gray-800" style={{"fontSize": "40px"}}>
                    <b>
                        What's the main reason for cancelling?
                    </b>
                </p> 

                <p className="text-md">
                    Please take a minute to let us know why:
                </p>


                {view.startsWith("step-3") && (
                    <div>
                        <label className="flex items-center space-x-2 mt-5">
                        <input
                        type="radio"
                        name="step-3-options"
                        value="step-3-too-expensive"
                        checked={view === "step-3-too-expensive"}
                        onChange={(e) => setView(e.target.value as StepView)}
                        className="form-radio text-red-500 scale-130"
                        />
                        <span>Too Expensive</span>
                        </label>
                         

                        <label className="flex items-center space-x-2 mt-5">

                        <input
                        type="radio"
                        name="step-3-options"
                        value="step-3-platform-not-helpful"
                        checked={view === "step-3-platform-not-helpful"}
                        onChange={(e) => setView(e.target.value as StepView)}
                        className="form-radio text-blue-500 scale-130"
                        />
                        <span>Platform not helpful</span>
                        </label>

                        <label className="flex items-center space-x-2 mt-5">
                        <input
                        type="radio"
                        name="step-3-options"
                        value="step-3-not-enough-relevant-jobs"
                        checked={view === "step-3-not-enough-relevant-jobs"}
                        onChange={(e) => setView(e.target.value as StepView)}
                        className="form-radio text-blue-500 scale-130"
                        />
                        <span>Not enough relevant jobs</span>

                        </label>

                        <label className="flex items-center space-x-2 mt-5">
                        <input
                        type="radio"
                        name="step-3-options"
                        value="step-3-decided-not-to-move"
                        checked={view === "step-3-decided-not-to-move"}
                        onChange={(e) => setView(e.target.value as StepView)}
                        className="form-radio text-blue-500 scale-130"
                        />
                        <span>Decided not to move</span>

                        </label>

                        <label className="flex items-center space-x-2 mt-5">
                        <input
                        type="radio"
                        name="step-3-options"
                        value="step-3-other"
                        checked={view === "step-3-other"}
                        onChange={(e) => setView(e.target.value as StepView)}
                        className="form-radio text-blue-500 scale-130"
                        />
                        <span>Other</span>
                    </label>
                    </div>
                    
                )}



                
                <hr className="text-gray-300 my-5"></hr>

                <button className="w-full bg-green-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
                    <b>Get 50% off | $12.50 <s style={{fontSize: "14px"}}>$25</s></b>
                </button>
            
            </div>
            


            <div className="col-span-2 flex items-center justify-center p-1">
                <img src="/images/empire-state-compressed.jpg" alt="Empire State Bldg" className="w-full h-full shadow-xl rounded-xl" />
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>




  );
}