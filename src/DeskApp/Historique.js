import React, { useState, useEffect, useCallback } from "react";
import db from "../firebase";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import ReactPaginate from "react-paginate";
import RSC from "react-scrollbars-custom";
import "./App.css";

export default function Historique() {
  const [historique, setHistorique] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const [displayTests, setDisplayTests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const testsPerPage = 6;

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await db.collection("historique").orderBy("date_test").get();
    setHistorique(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    let Items = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .slice(
        pageNumber * testsPerPage,
        pageNumber * testsPerPage + testsPerPage
      );
    setDisplayTests(Items);
    setLoading(false);
  });

  const pageCount = Math.ceil(historique.length / testsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log(selected);
    let Items = historique.slice(
      selected * testsPerPage,
      selected * testsPerPage + testsPerPage
    );
    console.log(Items);
    setDisplayTests([]);
    setDisplayTests(Items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="  font-bold text-3xl p-4 pl-6">Liste des tests</h1>

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

      <div className=" mt-12 ">
        <div className=" grid grid-cols-4 p-4  text-blue-600 font-semibold">
          <h1>Nom</h1>
          <h1>Prénom</h1>
          <h1>Résultat du test</h1>
          <h1>Date du test COVID-19</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div>
            {displayTests
              .filter((his) => {
                if (searchTerm == "") {
                  return his;
                } else if (
                  his.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  his.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  his.etat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  his.date_test.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return his;
                }
              })
              .map((his, index) => (
                <div
                  key={index}
                  className="bg-white border-t-2  grid grid-cols-4 p-4 "
                >
                  <h1>{his.nom}</h1>
                  <h1>{his.prenom}</h1>
                  <h1>{his.etat}</h1>
                  <h1>{his.date_test}</h1>
                </div>
              ))}
            <div className="mt-8 flex justify-end">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                nextLabel=">"
                previousLabel="<"
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
