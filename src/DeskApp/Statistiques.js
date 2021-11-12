import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

import Stat from "../Components/Cards/App";
import DataDz from "../Components/Cards/Card/DzData";
import Doughnuts from "../Components/Dashboard/Doughnut";

import World from "../Images/globe.png";
import Dz from "../Images/dz.png";
import Vaccin from "../Images/vaccin.png";

export default function Statistiques() {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className=" flex flex-col justify-evenly w-screen space-y-3 m-2">
        <div className=" flex flex-col justify-center items-center space-y-4 h-full w-full bg-white rounded-3xl shadow-md p-4">
          <div className="flex flex-row">
            <div>
              <img src={World} alt="world" width="220px" height="220px" />
            </div>
            <div>
              <p className="text-2xl font-semibold ml-8">
                Nombre de personnes infectées et décèdées par le COVID-19 dans
                le monde depuis le debut de la pandémie.
              </p>
            </div>
          </div>
          <Stat />
        </div>

        <div className=" flex flex-col justify-center items-center space-y-4 p-4  h-full w-full bg-white rounded-3xl shadow-md">
          <div className=" flex flex-row">
            <div className="">
              <img src={Dz} alt="dz" width="220px" height="220px" />
            </div>
            <div>
              <p className="text-2xl font-semibold ml-8">
                Nombre de personnes infectées et décèdées par le COVID-19 en
                Algérie depuis le debut de la pandémie.
              </p>
            </div>
          </div>

          <DataDz />
        </div>
      </div>

      <div className="flex flex-col   m-2  w-1/3 ">
        <div className=" bg-white rounded-3xl shadow-md p-4 h-screen flex  items-end flex-col space-y-20">
          <div className=" flex flex-row">
            <div className="flex items-center">
              <img src={Vaccin} alt="vaccin" width="250px" height="250px" />
            </div>
            <div>
              <p className="text-xl font-semibold ml-8">
                Nombre de personnes vaccinées contre le COVID-19 en Algérie.
              </p>
            </div>
          </div>
          <div>
            <Doughnuts />
          </div>
        </div>
      </div>
    </div>
  );
}
