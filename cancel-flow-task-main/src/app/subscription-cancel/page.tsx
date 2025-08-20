'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";


export default function SubsCancelHomePage() {

  const router = useRouter();
  
    const foundJob = () => {
      router.push("/subscription-cancel/job-found");
    };

    const foundNoJob = () => {
      router.push("/subscription-cancel/job-not-found");
    };

  return (
    <div className="min-h-screen bg-gray-400 py-12">
      <div className="bg-white shadow rounded-xl overflow-hidden mx-40 my-40">
        <div className="text-center p-4">
          <p className="text-gray-700" style={{"fontFamily": "Arial", "fontSize": "15px", "fontWeight": "bold"}}>
            Subscription Cancellation
          </p>
        </div>
        <hr className="text-gray-300"></hr>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            
              <div>
                <p className="leading-none m-0 text-gray-800" style={{"fontSize": "40px"}}><b>Hey mate,</b></p> 
                <p className="leading-none m-0 text-gray-800" style={{"fontSize": "40px"}}><b>Quick one before you go.</b></p>
                <br></br>
                <p className="text-gray-800" style={{"fontSize": "40px"}}><i><b>Have you found a job yet?</b></i></p>
                <br></br>
                <p>
                  Whatever your answer, we just want to help you take the 
                  next step. <br></br>With visa support, or by hearing how we can 
                  do better.
                </p>
                <hr className="text-gray-300 mt-6"></hr>

                <button onClick={foundJob} className="mt-5 w-full text-gray-700 px-4 py-2 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Yes, I've found a job
                </button>
                <button onClick={foundNoJob} className="mt-5 w-full text-gray-700 px-4 py-2 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Not yet, I'm still looking
                </button>
              </div>
              
              <div className="flex items-center justify-center p-2">
                <img src="/images/empire-state-compressed.jpg" alt="Empire State Bldg" className="w-130 h-100 shadow-xl rounded-xl" />
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>

  );
}