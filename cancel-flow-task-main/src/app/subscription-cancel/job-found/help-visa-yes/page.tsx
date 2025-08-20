'use client';

import { useState } from 'react';


export default function SubsCancelJobFoundHelpVisa() {

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
                        Your cancellation's all sorted, mate, no more charges.
                    </b>
                </p> 
                
                <br></br>

                <div className="m-2 p-2 bg-gray-100 rounded-xl">
                    <table>
                        <tbody>
                            <tr>
                                <td className="mx-4 p-2 align-top">
                                    <img src="/images/mihailo-profile.jpeg" alt="Mihailo Profile" className="w-20 h-15 rounded-full object-cover" />
                                </td>
                                <td className="mx-4 p-2">
                                    <p className="mt-2 text-gray-800" style={{fontSize: "16px"}}>
                                        Mihailo Bozic
                                        <br></br>
                                        <p className="text-gray-500" style={{fontSize: "14px"}}>
                                            {"<mihailo@migratemate.co>"}
                                        </p>
                                    </p>
                                    <br></br>
                                    <p className="leading-none m-0 text-gray-800" style={{fontSize: "18px", fontWeight: "bold"}}>
                                        I'll be reaching out soon to help with the visa side of things.
                                    </p>
                                    <br></br>
                                    <p className="leading-none m-0 text-gray-800" style={{fontSize: "18px"}}>
                                       We've got your back, whether it's questions, paperwork, or
                                       just figuring out your options.
                                    </p>
                                    <br></br>
                                    <p className="leading-none m-0 text-gray-800" style={{fontSize: "18px", fontWeight: "bold"}}>
                                       Keep an eye on your inbox, I'll be in touch shortly.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

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