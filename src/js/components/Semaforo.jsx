import React, { useState } from "react";

export default function Semaforo() {
    const [luzActiva, setLuzActiva] = useState("roja");

    return (

        // <button onClick={aquimetoalgo}></button>

        <div className="contenedor-base">
            <div className={`luz-roja ${luzActiva === "roja" ? "luz-activa" : ""}`} onClick={
                () => {
                    setLuzActiva("roja");
                }
            }></div>
            <div className={`luz-amarillo ${luzActiva === "amarillo" ? "luz-activa" : ""}`} onClick={
                () => {
                    setLuzActiva("amarillo")
                }
            }></div>
            <div className={`luz-verde ${luzActiva === "verde" ? "luz-activa" : ""}`} onClick={
                () => {
                    setLuzActiva("verde")
                }
            }></div>
        </div>
    );
}