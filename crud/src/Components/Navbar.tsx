import { MainContent } from "./MainContent";
import { Registry } from "./Registry";
import AuthContext from "./Providers/Auth";
import React from "react";
import { Section } from "./Sections/Section";

export function Navbar() {
  const { pageType, setPageType } = React.useContext(AuthContext);

  return (
    <>
      <div className="cursor-pointer font-['Inter'] h-12 bg-blueh-500 w-3/5 rounded-2xl mx-auto text-white mt-4 grid grid-cols-4 divide-x overflow-hidden">
        <button
          onClick={() => setPageType("REGISTER")}
          className="flex items-center  justify-center hover:bg-blueh-200 transition ease-in-out delay-150 focus:outline-none focus:bg-blueh-200"
        >
          Registrar
        </button>
        <button
          onClick={() => setPageType("UPDATE")}
          className="flex items-center justify-center hover:bg-blueh-200 transition ease-in-out delay-150 focus:outline-none focus:bg-blueh-200"
        >
          Editar
        </button>
        <button
          onClick={() => setPageType("DELETE")}
          className="flex items-center justify-center hover:bg-blueh-200 transition ease-in-out delay-150 focus:outline-none focus:bg-blueh-200"
        >
          Apagar
        </button>
        <button
          onClick={() => setPageType("LIST")}
          className="flex items-center  justify-center hover:bg-blueh-200 transition ease-in-out delay-150 focus:outline-none focus:bg-blueh-200"
        >
          Listar
        </button>
      </div>

      {!pageType && <MainContent />}
      {pageType === "REGISTER" && <Registry />}
      {pageType === "LIST" && <Section />}
      {pageType === "UPDATE" && <Section />}
      {pageType === "DELETE" && <Section />}
    </>
  );
}
