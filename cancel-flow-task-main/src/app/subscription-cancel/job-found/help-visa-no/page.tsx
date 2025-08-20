'use client';

import { useState } from 'react';


export default function SubsCancelJobFoundNoHelpVisa() {

  const [view, setView] = useState("completed");

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


            {/* Header for completed */}

            
            <div className="flex">
                <p className="text-gray-700 mr-5" style={{"fontFamily": "Arial", "fontSize": "15px", "fontWeight": "bold"}}>
                Subscription Cancelled
                </p>
                
                <div className="flex gap-2 items-center">
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                    <div className="w-6 h-2 rounded-full bg-green-500 text-white flex items-center justify-center"></div>
                </div>
                
                <p className="text-gray-500 mx-2" style={{"fontFamily": "Arial", "fontSize": "15px"}}>
                Completed
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


            {/* Left column for completed */}

            <div className="col-span-3">
                <p className="leading-none m-0 text-gray-800" style={{"fontFamily": "Arial", "fontSize": "40px"}}>
                    <b>
                        All done, your cancellation's been processed.
                    </b>
                </p> 
                
                <br></br>

                <p style={{"fontFamily": "Arial", "fontSize": "20px"}}>
                    <b>
                        We're stoked to hear you've landed a job and 
                        sorted your visa. Big congrats from the team.🙌
                    </b>
                </p>
                

                <hr className="text-gray-300 my-5"></hr>

                <button onClick={() => setView("step-3")} className="w-full bg-purple-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Finish
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