import React, { useState } from "react";

import { ImStatsDots } from "react-icons/im";

import { FaSyringe } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

import Doctor from "../Images/doctor.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { createBrowserHistory } from "history";

import HorizontalScroll from "react-scroll-horizontal";

import Health from "../Images/health.png";
import Mobile from "../Images/mobile.png";
import Desktop from "../Images/desktop.png";
import Safe from "../Images/safe.png";

import "./App.css";

const Home = () => {
  const [value, onChange] = useState(new Date());

  const child = { width: "40em", height: "98%" };

  const history = createBrowserHistory();

  function handleClick1() {
    history.push("/dashboard");
    window.location.reload(false);
  }

  function handleClick2() {
    history.push("/historique");
    window.location.reload(false);
  }

  function handleClick3() {
    history.push("/statistique");
    window.location.reload(false);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-5  w-full h-screen  ">
      <div className="bg-greenHome rounded-lg col-span-3 row-span-1 m-2 flex flex-row justify-between h-40">
        <div className="p-4 text-white">
          <h1 className="text-3xl font-bold p-1">Bienvenue !</h1>
          <p>
            GoPass vous permet de suivre l'état de vos patients face au
            COVID-19.
          </p>
          <p>vaccination, test, un code couleur unique généré !</p>
        </div>
        <div className="">
          <img
            className=""
            src={Doctor}
            alt="Doctor"
            height="230px"
            width="230px"
          />
        </div>
      </div>
      <div className=" col-span-1 row-span-2  m-2 mt-10">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="col-span-3 row-span-2  flex flex-row space-x-4 mt-20  justify-center items-center p-2 ">
        <div className="border-2  shadow-sm rounded-xl w-1/3 h-36  p-4 transition duration-500 ease-in-out  hover:bg-blue-200 transform hover:-translate-y-1 hover:scale-110 ">
          <a onClick={handleClick1} className="cursor-pointer">
            <div className="flex flex-row space-x-4 ml-3 ">
              <FaSyringe size={28} />
              <h1 className="font-bold text-xl"> Vaccination </h1>
            </div>
            <p className="leading-tight mt-2 text-gray-600 text-md text-center">
              enregistrer la vaccination de votre patient en inscrivant les
              dates des doses éffectuées.
            </p>
          </a>
        </div>
        <div className=" border-2 shadow-sm rounded-xl w-1/3 h-36  p-4 transition duration-500 ease-in-out  hover:bg-blue-200 transform hover:-translate-y-1 hover:scale-110 ">
          <a onClick={handleClick2} className="cursor-pointer">
            <div className="flex flex-row space-x-4 ml-3 ">
              <GiTestTubes size={28} />
              <h1 className="font-bold text-xl"> Test PCR</h1>
            </div>
            <p className="leading-tight mt-2 text-gray-600 text-md text-center">
              consulter l'historique des tests PCR de vos patients.
            </p>
          </a>
        </div>
        <div className=" border-2 shadow-sm rounded-xl w-1/3 h-36  p-4 transition duration-500 ease-in-out  hover:bg-blue-200 transform hover:-translate-y-1 hover:scale-110 ">
          <a onClick={handleClick3} className="cursor-pointer">
            <div className="flex flex-row space-x-4 ml-3 ">
              <ImStatsDots size={28} />
              <h1 className="font-bold text-xl"> Statistique </h1>
            </div>
            <p className="leading-tight mt-2 text-gray-600 text-md text-center">
              nombre de cas, de décès et de guérisons, liés au CoronaVirus
              (COVID-19) en Algérie.
            </p>
          </a>
        </div>
      </div>
      <div className=" row-span-2 col-span-4">
        <HorizontalScroll>
          <div
            style={child}
            className="flex flex-row space-x-24 justify-center items-center"
          >
            <div className="w-2/6 h-full border-1 border-gray-200 rounded-md shadow-xl  ">
              <img
                className="mx-auto"
                src={Health}
                alt="health"
                height="140px"
                width="140px"
              />
              <p className="leading-tight tracking-tighter text-center text-md p-1 font-semibold">
                Une solution adaptée aux centres de santé
              </p>
              <p className="leading-tight tracking-tighter  p-1 text-center text-gray-600">
                Nous avons imaginé GoPass pour centraliser les informations du
                suivi de santé des patients face au COVID-19 et faciliter
                l'accés aux lieux publics.
              </p>
            </div>
            <div className="w-2/6 h-full border-1 border-gray-200 rounded-md shadow-xl  ">
              <img
                className="mx-auto"
                src={Mobile}
                alt="health"
                height="110px"
                width="110px"
              />
              <p className="leading-tight tracking-tighter text-center text-md p-1 font-semibold">
                Une solution mobile
              </p>
              <p className="leading-tight tracking-tighter  p-1 text-center text-gray-600">
                Votre smartphone devient votre passeport sanitaire, présentez
                votre GoPass a l'entrée exigant une preuve valide de vaccination
                ou de test négatif.
              </p>
            </div>
          </div>
          <div style={child} className="flex flex-row space-x-24 ">
            <div className="w-2/6 h-full border-1 border-gray-200 rounded-md shadow-xl  ">
              <img
                className="mx-auto"
                src={Desktop}
                alt="health"
                height="150px"
                width="150px"
              />
              <p className="leading-tight tracking-tighter text-center text-md p-1 font-semibold">
                Une solution Desktop
              </p>
              <p className="leading-tight tracking-tighter  p-1 text-center text-gray-600">
                Une solution qui permet aux corps médicals de renseigner l'état
                d'un patient en lui générant un code QR code unique qui valide
                ou invalide son pass.
              </p>
            </div>
            <div className="w-2/6 h-full border-1 border-gray-200 rounded-md shadow-xl  ">
              <img
                className="mx-auto pb-2"
                src={Safe}
                alt="health"
                height="100px"
                width="100px"
              />
              <p className="leading-tight tracking-tighter text-center text-md p-1 font-semibold">
                Participer a éliminer la propagation du virus.
              </p>
              <p className="leading-tight tracking-tighter  p-1 text-center text-gray-600">
                L'utilisation à grande échelle de l'application favorisera le
                controle et la dimunition du nombres de cas inféctés par le
                COVID-19.
              </p>
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Home;
