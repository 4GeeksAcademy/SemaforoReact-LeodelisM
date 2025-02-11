import React, { useState } from "react";

export default function Semaforo() {
    const [luzActiva, setLuzActiva] = useState("null");

    // Función para cambiar colores, asociada al botón "Cambiar Color"
    const cambiarColores = () => {
        if (luzActiva === "null" || luzActiva === "verde") {
            setLuzActiva("roja");
        } else if (luzActiva === "roja") {
            setLuzActiva("amarillo");
        } else if (luzActiva === "amarillo") {
            setLuzActiva("verde");
        }
    };

    return (
        <div>
            <div className="contenedor-base">
                <div
                    className={`luz-roja ${luzActiva === "roja" ? "luz-activa" : ""}`}
                    onClick={() => setLuzActiva("roja")}
                ></div>
                <div
                    className={`luz-amarillo ${luzActiva === "amarillo" ? "luz-activa" : ""}`}
                    onClick={() => setLuzActiva("amarillo")}
                ></div>
                <div
                    className={`luz-verde ${luzActiva === "verde" ? "luz-activa" : ""}`}
                    onClick={() => setLuzActiva("verde")}
                ></div>
            </div>

            <div className="boton-cambiar-color">
                <button
                    onClick={cambiarColores}
                    className="cambiar-color"
                >
                    Cambiar Color
                </button>
            </div>
        </div>
    );
}