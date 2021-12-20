import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateTarea, onDeleteTarea, onGetTareas } from 'redux_folder/actions/tareas.actions';
import TareaItem from './TareaItem';
import TareasEditForm from './TareasEditForm';
import TareasForm from './TareasForm';

const tareaDefault = {
    idTarea: 0,
    idProyecto: 0,
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
    const [selectedTarea, setSelectedTarea] = useState(tareaDefault)
    const [enteredtarea, setTarea] = useState(tareaDefault)
    const dispatch = useDispatch();

    const buttons = [
        {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            command: () => { showSaveDialog() }
        },
        {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            command: () => { showEditDialog() }
        },
        {
            label: 'Eliminar',
            icon: 'pi pi-fw pi-trash',
            command: () => { tareasDelete() }
        }
    ];

    const showSaveDialog = () => {
        setVisibleSave(true);
        //setProyecto(proyectoDefault)
        //document.getElementById('proyecto-form').reset();
    }

    const showSuccess = (msje: any) => {
        toast.current.show({ severity: 'success', summary: msje.title, detail: msje.description, life: 3000 });
    }

    const showWarn = (msje) => {
        toast.current.show({ severity: 'warn', summary: msje.title, detail: msje.description, life: 3000 });
    }

    const showEditDialog = () => {
        setVisibleEdit(true);
        setTarea(selectedTarea);
    }

    const tareasDelete = () => {
        if (0!== selectedTarea.idTarea) {
            if (window.confirm("¿Desea eliminar Tarea: " + selectedTarea.idTarea + "?")) {
                console.log(selectedTarea.idTarea.toString());
                dispatch(onDeleteTarea(selectedTarea.idTarea.toString())); 
                const deletedMessage = {
                    title: 'Tarea Eliminada! ',
                    description: 'Se elimina tarea con exito.'
                }
                showSuccess(deletedMessage);
            }
            //vuelvo a llamar para actualizar el numero de proyectos.
           // dispatch(onGetTareas());
        } else {
            const deletedWarningMessage = {
                title: 'Atencion! ',
                description: 'Debe seleccionar una tarea para ser eliminada.'
            }
            showWarn(deletedWarningMessage);
        }
    }

    const save = (enteredTarea) => {
        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST
        console.log(enteredTarea);
        dispatch(onCreateTarea(enteredTarea));
        setVisibleSave(false);
        const createdMessage = {
            title: 'Tarea agregada! ',
            description: 'Se agrego correctamente al proyecto: ' + enteredTarea.nombre
        }
        showSuccess(createdMessage);
        //vuelvo a llamar a todos los proyectos.
        // dispatch(onGetTareas(enteredTarea.idProyecto.idProyecto.toString()));

    }

    const actualizar = (id: any) => {

    }
    return (
        <div>
            <Toast ref={toast} />
            <TareaItem
                items={props.items}
                buttons={buttons}
                selectedTarea={selectedTarea}
                setSelectedTarea={setSelectedTarea}
            />
            <TareasForm
                // items={props.items}
                onSave={save}
                visible={visibleSave}
                setVisible={setVisibleSave}
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