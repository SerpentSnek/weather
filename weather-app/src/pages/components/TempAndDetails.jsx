import React from "react";
import * as Unicons from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-blue-100">
        <p>clear sky</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <Unicons.UilSun size={75} />
        <p className="text-5xl ml-10">34°</p>
        {/* the 3 details */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <Unicons.UilTemperature size={18} className="mr-1" />
            real feel:
            <span className="font-normal ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <Unicons.UilTear size={18} className="mr-1" />
            humidity:
            <span className="font-normal ml-1">5%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <Unicons.UilWind size={18} className="mr-1" />
            wind:
            <span className="font-normal ml-1">11 km/hr</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <Unicons.UilSun />
        <p className="font-light">
          sunrise: <span className="font-normal ml-1"> 06:45</span>
        </p>
        <p className="font-medium">|</p>

        <Unicons.UilSunset />
        <p className="font-light">
          sunset: <span className="font-normal ml-1"> 20:45</span>
        </p>
        <p className="font-medium">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          high: <span className="font-normal ml-1"> 75°</span>
        </p>
        <p className="font-medium">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          low: <span className="font-normal ml-1"> 25°</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;
