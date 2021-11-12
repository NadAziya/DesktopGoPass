import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ButtonMain from "../Components/ButtonMain";
import "./App.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { GiSaveArrow } from "react-icons/gi";
import TextField from "@mui/material/TextField";
import form from "../Images/form.jpg";
import info from "../Images/information.png";

import db from "../firebase";

const Modal = ({ isShowing, hide, cent }) => {
  const [modify, setModify] = useState(false);
  const [centreVac, setCentreVac] = useState("/");
  const [dateDose1, setDateDose1] = useState("00-00-0000");
  const [dateDose2, setDateDose2] = useState("00-00-0000");
  const [etat, setEtat] = useState("/");

  const [dateTest, setDateTest] = useState("00-00-0000");
  const [vaccinationn, setVaccination] = useState("Non vacciné(e)");

  const [typevaccin, setTypeVaccin] = useState("/");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    db.collection("users").doc(cent.id).get();
    setLoading(false);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const onUpdate = async () => {
    setLoading(true);
    try {
      await db.collection("users").doc(cent.id).update({
        vaccination: vaccinationn,
        type_vaccin: typevaccin,
        date_1dose: dateDose1,
        date_2dose: dateDose2,
        centre_vacc: centreVac,
        etat: etat,
        date_test: dateTest,
      });
      if (etat != "/" && dateTest != "00-00-0000") {
        await db.collection("historique").add({
          id: cent.id,
          nom: cent.nom,
          prenom: cent.prenom,
          etat: etat,
          date_test: dateTest,
        });
        await db.collection("users").doc(cent.id).collection("historique").add({
          prenom: cent.prenom,
          etat: etat,
          date_test: dateTest,
        });
      }
      setLoading(true);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    setEtat(cent.etat);
    setDateDose1(cent.date_1dose);
    setDateDose2(cent.date_2dose);
    setVaccination(cent.vaccination);
    setTypeVaccin(cent.type_vaccin);
    setCentreVac(cent.centre_vacc);
    setDateTest(cent.date_test);
  }, [cent]);
  console.log(cent);
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay " />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* ici commence le code de la modal  */}

              {!modify && (
                <div className="flex flex-row overflow-hidden">
                  <div className="w-1/2">
                    <img src={info} alt="more information" />
                    <h1 className="text-center font-bold text-2xl mb-4 mt-4">
                      Bienvenue !
                    </h1>
                    <h2 className="text-center  text-md ">
                      Voici les informations personnelles
                    </h2>
                    <h2 className="text-center  text-md ">
                      relatives au patient
                    </h2>
                  </div>
                  <div className="space-y-4  w-1/2 border-transparent shadow-2xl pl-8">
                    <div>
                      <div className="flex space-x-2 overflow-hidden justify-center">
                        <img
                          className="inline-block h-32  w-32 shadow-md rounded-full ring-2 ring-white"
                          src={cent.imageUri}
                          alt=""
                        />
                      </div>
                    </div>
                    <p>
                      <span className=" mr-4">Nom: </span>
                      <span className=" text-gray-500">{cent.nom}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Prénom:</span>
                      <span className=" text-gray-500">{cent.prenom}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Date de naissance:</span>
                      <span className=" text-gray-500">
                        {cent.date_de_naissance}
                      </span>
                    </p>
                    <p>
                      <span className=" mr-4">Etat du patient:</span>
                      <span className=" text-gray-500">{cent.etat}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Vaccination:</span>
                      <span className=" text-gray-500">{cent.vaccination}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Type du vaccin:</span>
                      <span className=" text-gray-500">{cent.type_vaccin}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Date de la 1ere dose:</span>
                      <span className=" text-gray-500">{cent.date_1dose}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Date de la 2eme dose:</span>
                      <span className=" text-gray-500">{cent.date_2dose}</span>
                    </p>
                    <p>
                      <span className=" mr-4">Centre de vaccination:</span>
                      <span className=" text-gray-500">{cent.centre_vacc}</span>
                    </p>
                    <div className="mt-12 flex justify-end">
                      <ButtonMain
                        className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-red-600 border-red-600 hover:text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300"
                        onClick={refreshPage}
                        type="submit"
                        buttonTitle="Annuler"
                      >
                        <ImCancelCircle size={20} className="w-4 h-4 mr-2" />
                      </ButtonMain>

                      <ButtonMain
                        className=" inline-flex items-center  px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
                        buttonTitle="Modifier"
                        onClick={() => {
                          setModify(true);
                        }}
                      >
                        <HiOutlinePencilAlt
                          size={20}
                          className="w-4 h-4 mr-2"
                        />
                      </ButtonMain>
                    </div>
                  </div>
                </div>
              )}

              {modify && (
                //mise a jour des donnees
                <div className="flex flex-row">
                  <div className=" items-center inline-block mt-12  ">
                    <img src={form} alt="form" width="500px" height="500px" />
                    <h1 className="text-center font-bold text-2xl mb-2">
                      Mise à jour des informations
                    </h1>
                    <h2 className="text-center  ">
                      N'oubliez pas d'enregistrer
                    </h2>
                    <h2 className="text-center ">vos modifications</h2>
                  </div>
                  <div className="grid grid-cols-2 space-y-6 space-x-6 p-6 ">
                    <div className="mt-6 ml-6">
                      <TextField
                        disabled
                        id="standard-disabled"
                        label="Nom"
                        defaultValue={cent.nom}
                        variant="standard"
                      />
                    </div>
                    <div>
                      <TextField
                        disabled
                        id="standard-disabled"
                        label="Prénom"
                        defaultValue={cent.prenom}
                        variant="standard"
                      />
                    </div>

                    <div>
                      <TextField
                        disabled
                        id="standard-disabled"
                        label="Date de naissance"
                        defaultValue={cent.date_de_naissance}
                        variant="standard"
                      />
                    </div>
                    <div></div>
                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Etat du patient
                        </label>
                      </div>
                      <div className="inline-block relative w-52 ">
                        <select
                          value={etat}
                          onChange={(e) => {
                            setEtat(e.target.value);
                          }}
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="/">/</option>
                          <option value="Positif(ve)">Positif(ve)</option>
                          <option value="Négatif(ve)">Négatif(ve)</option>__
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Date du test
                        </label>
                      </div>
                      <input
                        value={dateTest}
                        onChange={(e) => {
                          setDateTest(e.target.value);
                        }}
                        className="border border-gray-500 p-1 w-52 pl-2"
                        type="date"
                        placeholder="JJ/MM/AA"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Type du vaccin
                        </label>
                      </div>
                      <div className="inline-block relative w-52 mt-2">
                        <select
                          value={typevaccin}
                          onChange={(e) => {
                            setTypeVaccin(e.target.value);
                          }}
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="/">/</option>
                          <option value="Sinovac-CoronaVac">
                            Sinovac-CoronaVac
                          </option>
                          <option value="Astrazeneca">Astrazeneca</option>
                          <option value="Spoutnik">Spoutnik</option>
                          <option value="Johnson and Johnson">
                            Johnson and Johnson
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Vaccination COVID-19
                        </label>
                      </div>
                      <div className="inline-block relative w-52 mt-2">
                        <select
                          value={vaccinationn}
                          onChange={(e) => {
                            setVaccination(e.target.value);
                          }}
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="/">/</option>
                          <option value="Vacciné(e)">Vacciné(e)</option>
                          <option value="Non-vacciné(e)">Non-vacciné(e)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Date de la 1ere dose
                        </label>
                      </div>
                      <input
                        value={dateDose1}
                        onChange={(e) => {
                          setDateDose1(e.target.value);
                        }}
                        className="border border-gray-500 p-1 w-52 pl-2"
                        type="date"
                        placeholder="JJ/MM/AA"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <label className="text-gray-600 font-xs font-sans font-thin">
                          Date de la 2eme dose
                        </label>
                      </div>
                      <input
                        value={dateDose2}
                        onChange={(e) => {
                          setDateDose2(e.target.value);
                        }}
                        className="border border-gray-500 p-1 w-52 pl-2"
                        type="date"
                        placeholder="JJ/MM/AA"
                      />
                    </div>

                    <div>
                      <TextField
                        value={centreVac}
                        onChange={(e) => {
                          setCentreVac(e.target.value);
                        }}
                        label="Centre de vaccination"
                        id="standard-size-normal"
                        defaultValue=""
                        variant="standard"
                      />
                    </div>

                    <div className=" flex justify-end pt-24">
                      <ButtonMain
                        className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-red-600 border-red-600 hover:text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300"
                        onClick={hide}
                        type="submit"
                        buttonTitle="Annuler"
                      >
                        <ImCancelCircle size={20} className="w-4 h-4 mr-2" />
                      </ButtonMain>
                      <ButtonMain
                        className=" inline-flex items-center  px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
                        buttonTitle="Enregistrer"
                        onClick={onUpdate}
                      >
                        {loading ? (
                          <svg
                            class="animate-spin h-5 w-5 mr-3 bg-white"
                            viewBox="0 0 24 24"
                          ></svg>
                        ) : (
                          <GiSaveArrow size={20} className="w-4 h-4 mr-2" />
                        )}
                      </ButtonMain>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
