import useTypedSelector from "hooks/useTypedSelector";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Tareas from "views/Proyects/Tareas/Tareas";

const tareaDefault = {
    "idTarea": 0,
    "idProyecto": 0,
    "idLegajoEmpleado": 0,
    "nombre": "",
    "descripcion": "",
    "fechaInicioReal": "",
    "fechaFinalizacionReal": "",
    "horasEstimadas": 0,
    "horasTrabajadas": 0,
    "idTicket": 0,
    "prioridad": "",
    "estado": ""
}

const TareasContainer = () => {
    const { state } = useLocation();
    const { tareas } = state;


    return (
        <Tareas
            items={tareas}
        ></Tareas>
    );
}

export default TareasContainer;