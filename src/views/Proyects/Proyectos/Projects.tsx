import { useEffect, useRef, useState } from 'react';

import ProjectForm from './ProjectForm';
import ProjectItem from './ProjectItem';
import { useDispatch } from 'react-redux';
import { Toast } from 'primereact/toast';
import { createProyect, deleteProyects, onProyectsGetAll, putProyect } from 'redux_folder/actions/proyects.actions';
import ProjectEditForm from './ProjectEditForm';
import useTypedSelector from 'hooks/useTypedSelector';
import { putProyects } from 'services/proyects.services';

const proyectoDefault = {
    idProyecto: 0,
    nombre: '',
    descripcion: '',
    fechaInicioReal: '',
    fechaFinalizacionReal: '',
    fechaInicioEstimada: '',
    fechaFinalizacionEstimada: '',
    fechaEntregaComunicadaACliente: '',
    horasEstimadas: 0,
    prioridad: '',
    estado: ''
}

const Projects = (props: any) => {
    const toast = useRef(document.createElement("div") as any);
    const [visibleSave, setVisibleSave] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [selectedProject, setSelectedProject] = useState(proyectoDefault)
    // const [proyecto, setProyecto] = useState(proyectoDefault)
    const proyectos = useTypedSelector((state) => state.proyects.proyects);
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
            command: () => { projectDelete() }
        }
    ];

    const showSuccess = (msje: any) => {
        toast.current.show({ severity: 'success', summary: msje.title, detail: msje.description, life: 3000 });
    }

    const showInfo = (msje) => {
        toast.current.show({ severity: 'info', summary: msje.title, detail: msje.description, life: 3000 });
    }

    const showWarn = (msje) => {
        toast.current.show({ severity: 'warn', summary: msje.title, detail: msje.description, life: 3000 });
    }

    const showError = (msje) => {
        toast.current.show({ severity: 'error', summary: msje.title, detail: msje.description, life: 3000 });
    }


    const save = (enteredProject) => {
        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST

        dispatch(createProyect(enteredProject));
        setVisibleSave(false);
        const createdMessage = {
            title: 'Pryecto agregado! ',
            description: 'Se agrego correctamente el proyecto: ' + enteredProject.nombre
        }
        showSuccess(createdMessage);
        //vuelvo a llamar a todos los proyectos.
        dispatch(onProyectsGetAll());

    }

    const edit = () => {
        console.log(selectedProject);
        debugger;
        if (0 !== selectedProject.idProyecto) {
            setVisibleSave(false);
            dispatch(putProyect(selectedProject))
            const editedMessage = {
                title: 'Proyecto editado! ',
                description: 'Se edito correctamente el proyecto: ' + selectedProject.nombre
            }
            showSuccess(editedMessage);
            //vuelvo a llamar a todos los proyectos.
            dispatch(onProyectsGetAll());
        } else {
            const deletedWarningMessage = {
                title: 'Atencion! ',
                description: 'Debe seleccionar un proyecto para ser editado.'
            }
            showWarn(deletedWarningMessage);
        }
    }

    const projectDelete = () => {
        if (0 !== selectedProject.idProyecto) {
            if (window.confirm("¿Desea eliminar Proyecto: " + selectedProject.idProyecto + "?")) {

                try {
                    dispatch(deleteProyects(selectedProject.idProyecto.toString()));
                    const deletedMessage = {
                        title: 'Atencion! ',
                        description: 'No se puede eliminar el proyecto: .' + selectedProject.idProyecto + ' puede contener tareas.'
                    }
                    showWarn(deletedMessage);

                } catch (error: any) {
                    const deletedMessage = {
                        title: 'Atencion! ',
                        description: 'No se puede eliminar el proyecto: .' + selectedProject.idProyecto + ' puede contener tareas.'
                    }
                    showWarn(deletedMessage);
                };
            }
            //vuelvo a llamar para actualizar el numero de proyectos.
            dispatch(onProyectsGetAll());
        } else {
            const deletedWarningMessage = {
                title: 'Atencion! ',
                description: 'Debe seleccionar un proyecto para ser eliminado.'
            }
            showWarn(deletedWarningMessage);
        }
    }

    const showSaveDialog = () => {
        setVisibleSave(true)
        //setProyecto(proyectoDefault)
        //document.getElementById('proyecto-form').reset();
    }

    const showEditDialog = () => {
        if (0 !== selectedProject.idProyecto) {
            setVisibleEdit(true)
            // setProyecto(selectedProject)
        } else {
            const deletedWarningMessage = {
                title: 'Atencion! ',
                description: 'Debe seleccionar un proyecto para ser editado.'
            }
            showWarn(deletedWarningMessage);
        }
    }

    return (
        <div>
            <Toast ref={toast} />
            <ProjectItem
                items={proyectos}
                buttons={buttons}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
            <ProjectForm
                onSave={save}
                visible={visibleSave}
                setVisible={setVisibleSave}
            />
            <ProjectEditForm
                projectSelected={selectedProject}
                onEdit={edit}
                onSetEditedProject={setSelectedProject}
                visible={visibleEdit}
                setVisible={setVisibleEdit}
            />

        </div >
    )
}
export default Projects;

