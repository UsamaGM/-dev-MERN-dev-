import React from "react";
import img from "../assets/images/blackboard-class.svg";

const Sidebar = () => {
  return (
    <div className="bg-sky-700 px-6 py-2 text-white text-xl rounded-3xl w-40 flex justify-center items-center cursor-pointer hover:bg-sky-600 mr-6">
                  <img className="p-2" src={img} alt="Search Icon" />
                  <p> username</p>
    </div>



    // <div className="w-52 h-screen bg-white border-r p-5 space-y-6">
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">⏱️</span>
    //     <span className="text-base">Dashboard</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">🏬</span>
    //     <span className="text-base">Restautant’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">👤</span>
    //     <span className="text-base">Manage User’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">📦</span>
    //     <span className="text-base">Manage Order’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">🏷️</span>
    //     <span className="text-base">Manage Coupon’s</span>
    //   </div>
    // </div>
  );
};

export default Sidebar;
