import React from "react";
import Nav from "../components/Nav";

const alumnosData = [
  {
    id: 1,
    nombre: "John",
    apellido: "Doe",
    foto: "https://via.placeholder.com/150",
    rangoHorario: "Mañana",
    estadoPago: "Al día",
    edad: 25,
  },
  {
    id: 2,
    nombre: "Jane",
    apellido: "Smith",
    foto: "https://via.placeholder.com/150",
    rangoHorario: "Tarde",
    estadoPago: "Atrasado",
    edad: 30,
  },
  // Agrega más datos de alumnos si es necesario
];

export default function Alumnos() {
  return (
    <>
      <Nav />
      <div className="container mx-auto m-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {alumnosData.map((alumno) => (
          <div
            key={alumno.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={alumno.foto}
              alt={`Foto de ${alumno.nombre} ${alumno.apellido}`}
              className="w-35 h-35 rounded-full mb-4 mx-auto"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold mb-2">
                {alumno.nombre} {alumno.apellido}
              </p>
              <p className="text-base text-gray-500">Edad: {alumno.edad}</p>
              <p className="text-base text-gray-500 mb-2">
                Rango Horario: {alumno.rangoHorario}
              </p>
              <p className="text-base text-gray-500 mb-2">
                Estado de pago: {alumno.estadoPago}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
