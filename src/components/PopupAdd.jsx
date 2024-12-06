import React, { useState } from "react";
import { database } from "../data/firebase";
import { ref as dbRef, set } from "firebase/database";

export const PopupAdd = ({ handleClosePopup }) => {
  const [nombre, setNombre] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = dbRef(database, `/products/${nombre}`);
      await set(newProduct, {
        nombre: nombre,
        catidad: cantidad,
        precio: precio,
      });
    } catch (error) {}
  };
  return (
    <div className="bg-[#4cad73] flex p-5 rounded-lg gap-3">

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h1 className="main-tittle self-center text-white text-2xl">
        Nuevo Producto
      </h1>
        <input
          className="p-2 rounded-lg"
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Nombre del producto"
        />
        <input
          className="p-2 rounded-lg"
          onChange={(e) => setCantidad(e.target.value)}
          type="number"
          placeholder="Cantidad del producto"
        />
        <input
          className="p-2 rounded-lg"
          onChange={(e) => setPrecio(e.target.value)}
          type="number"
          placeholder="Precio del producto"
        />
        <div className="flex justify-around gap-5 ">
          <button
            className="bg-[#4CAD73] text-white font-medium p-2 rounded-lg border border-[#4CAD73"
            type="submit"
          >
            Agregar
          </button>
          <button
            className="bg-[#4CAD73] text-white font-medium p-2 rounded-lg border border-[#4CAD73"
            onClick={() => handleClosePopup()}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};
