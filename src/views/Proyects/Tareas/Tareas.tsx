import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import TareaItem from './TareaItem';
import TareasEditForm from './TareasEditForm';
import TareasForm from './TareasForm';

const tareaDefault = {
    idTarea: 0,
    idLegajoEmpleado: 0,
    nombre: "",
    descripcion: "",
    fechaInicioReal: "",
    fechaFinalizacionReal: "",
    horasEstimadas: 0,
    horasTrabajadas: 0,
    idTicket: 0,
    prioridad: "",
    estado: ""
}
const Tareas = (props: any) => {
    const toast = useRef(document.createElement("div") as any);
    const [visibleSave, setVisibleSave] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [selectedProject, setSelectedProject] = useState(tareaDefault)
    const [proyecto, setProyecto] = useState(tareaDefault)
    const dispatch = useDispatch();
    return (
        <div>
            <Toast ref={toast} />
            <TareaItem
                items={props.items}
            // buttons={buttons}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            />
            <TareasForm
            // onSave={save}
            // visible={visibleSave}
            // setVisible={setVisibleSave}
            />
            <TareasEditForm
            // projectSelected={proyecto}
            // onEdit={edit}
            // onSetEditedProject={setSelectedProject}
            // visible={visibleEdit}
            // setVisible={setVisibleEdit}
            />
        </div>
    );
}

export default Tareas;