"use client";
import { useState } from "react";

export default function Form({ cep, setCep, endereco, callApi }) {
  const [numero, setNumero] = useState("");
  return (
    <form className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="CEP"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={cep || ""}
        onChange={(event) => {
          setNumero("");
          const value = event.target.value.replace(/\D/g, "");
          setCep(value);
          if (value.length === 8) {
            callApi(value);
          }
        }}
      ></input>

      <input
        type="text"
        placeholder="Rua"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={endereco.logradouro || ""}
        readOnly
      ></input>

      <input
        type="text"
        placeholder="Número"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={numero}
        onChange={(event) => {
          const value = event.target.value.replace(/\D/g, "");
          setNumero(value);
        }}
      ></input>

      <input
        type="text"
        placeholder="Bairro"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={endereco.bairro || ""}
        readOnly
      ></input>

      <input
        type="text"
        placeholder="Estado"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={endereco.uf || ""} 
        readOnly
      ></input>

      <input
        type="text"
        placeholder="Cidade"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0"
        value={endereco.cidade || ""} 
        readOnly
      ></input>
    </form>
  );
}
