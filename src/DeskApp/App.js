import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import ButtonMain from "../Components/ButtonMain";
import Modal from "./Modal";
import useModal from "./UseModal";
import SearchBar from "../Components/SearchBar";
import { FaHospital } from "react-icons/fa";
import Card from "../Components/Card";
import Info from "../Images/info.png";
import RSC from "react-scrollbars-custom";
import { Scrollbar } from "react-scrollbars-custom";
import db from "../firebase";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [centre, setCentre] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [cent, setCent] = useState({});

  const [searchTerm, setSearchTerm] = useState("");

  function toggle(cent) {
    setIsShowing(!isShowing);
    setCent(cent);
  }

  function hide() {
    toggle({});
    window.location.reload(false);
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    setRefreshing(true);
    const data = await db.collection("users").get();
    setCentre(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
    setRefreshing(false);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 h-screen  ">
      <div className="bg-white shadow-xl w-full flex flex-row justify-between h-40  ">
        <div className="p-4 text-gray-900">
          <h1 className="text-3xl font-bold p-1">Bienvenue !</h1>
          <p>
            GoPass vous permet de suivre l'état de vos patients face au
            COVID-19.
          </p>
          <p>vaccination, test, un code couleur unique généré !</p>
        </div>
        <div className="p-4">
          <img
            className=""
            src={Info}
            alt="Doctor"
            height="180px"
            width="180px"
          />
        </div>
      </div>
      <h1 className="  font-bold text-2xl p-4 pl-6">Liste des patients</h1>

      <div className="relative ">
        <div className="absolute top-4 left-3 ">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>
        <input
          type="text"
          className=" pl-4 h-14 w-full rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Rechercher..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="absolute top-2 right-2">
          <button className="h-10 w-30  text-white rounded-lg bg-blue-500 hover:bg-blue-600">
            Recherche
          </button>
        </div>
      </div>

      <div className=" mt-8 ">
        <div className=" grid grid-cols-5 p-4 text-blue-600 font-semibold mr-10 ml-10">
          <h1>Nom</h1>
          <h1>Prénom</h1>
          <h1>Date de naissance</h1>
          <h1>Vaccination</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div>
            <div className="overflow-y-auto h-56">
              {centre
                .filter((cent) => {
                  if (searchTerm == "") {
                    return cent;
                  } else if (
                    cent.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cent.prenom.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return cent;
                  }
                })
                .map((cent, index) => (
                  <div
                    key={cent.index}
                    className="bg-white border shadow-md  h-30  grid grid-cols-5 p-4 justify-around mr-10 ml-10 "
                  >
                    <div className="flex items-center ">
                      <p>{cent.nom}</p>
                    </div>
                    <div className="flex items-center ">
                      <p>{cent.prenom}</p>
                    </div>
                    <div className="flex items-center ">
                      <p>{cent.date_de_naissance}</p>
                    </div>

                    <div className="flex flex-row ">
                      <div className="flex  justify-end items-center ">
                        <p>{cent.vaccination}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mr-10 ">
                      <ButtonMain
                        className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
                        onClick={() => {
                          toggle(cent);
                        }}
                        buttonTitle="Afficher"
                      />
                    </div>
                  </div>
                ))}
            </div>

            <Modal isShowing={isShowing} hide={hide} cent={cent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
