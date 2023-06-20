import React from "react";
import * as Unicons from "@iconscout/react-unicons";

function Forecast({title}) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium lowercase">{title}</p>
      </div>
      <hr className="my-2" />
      
      <div className="flex flex-row items-center justify-between text-white">
        
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-sm">16:40</p>
          <Unicons.UilCloud size={40} />
          <p className="font-normal">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-sm">16:40</p>
          <Unicons.UilCloud size={40} />
          <p className="font-normal">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-sm">16:40</p>
          <Unicons.UilCloud size={40} />
          <p className="font-normal">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-sm">16:40</p>
          <Unicons.UilCloud size={40} />
          <p className="font-normal">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-sm">16:40</p>
          <Unicons.UilCloud size={40} />
          <p className="font-normal">22</p>
        </div>

      </div>
    </div>
  );
}

export default Forecast;
