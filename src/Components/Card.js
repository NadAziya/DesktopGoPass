import React from "react";
import ReactDOM from "react-dom";
import ButtonMain from "./ButtonMain";
import Modal from "../DeskApp/Modal";
import useModal from "../DeskApp/UseModal";

const Card = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="bg-white border shadow-md  h-30  grid grid-cols-6 p-1 ">
      <div className="flex  overflow-hidden justify-self-center ">
        <img
          className="inline-block h-14 w-14 shadow-md rounded-full ring-2 ring-white "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>

      <div className="flex items-center ">
        <p>{props.nom}</p>
      </div>
      <div className="flex items-center ">
        <p>{props.prenom}</p>
      </div>
      <div className="flex items-center ">
        <p>{props.dateNais}</p>
      </div>

      <div className="flex flex-row ">
        <div className="flex  justify-end items-center ">
          <p>{props.etat}</p>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <ButtonMain
          className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
          onClick={toggle}
          buttonTitle="Afficher"
        />
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Card;
