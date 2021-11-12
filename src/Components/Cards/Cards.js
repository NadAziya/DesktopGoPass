import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/CardComponent";
import styles from "./Cards.css";

const Info = ({ data: { confirmed, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="Container">
      <div className="flex flex-row ">
        <CardComponent
          className="Infected "
          cardTitle="Infecté"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de cas infectés par le COVID-19."
        />

        <CardComponent
          className="Deaths"
          cardTitle="Décès"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de décès causés par le COVID-19."
        />
      </div>
    </div>
  );
};

export default Info;
