import { useRef, useState } from 'react';

import ProjectForm from './ProjectForm';
import ProjectItem from './ProjectItem';
import { useDispatch } from 'react-redux';
import { Toast } from 'primereact/toast';
import { createProyect, onProyectsGetAll } from 'redux_folder/actions/proyects.actions';
import ProjectEditForm from './ProjectEditForm';
import { deleteProyects, putProyects } from 'services/proyects.services';

const proyectoDefault = {
    idProyecto: null,
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
    const [proyecto, setProyecto] = useState(proyectoDefault)
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
        setVisibleSave(false);
        // dispatch(putProyects(selectedProject))
        const editedMessage = {
            title: 'Proyecto editado! ',
            description: 'Se edito correctamente el proyecto: ' + proyecto.nombre
        }
        showSuccess(editedMessage);
        console.log(selectedProject);
        //vuelvo a llamar a todos los proyectos.
        dispatch(onProyectsGetAll());
    }

    const projectDelete = () => {

        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL DELETE
        if (null != selectedProject.idProyecto) {
            if (window.confirm("¿Desea elminar Proyecto: " + selectedProject.idProyecto + "?")) {
                //cantidad de proyectos creados
                const proyectos = props.projects;
                try {
                    dispatch(deleteProyects(selectedProject.idProyecto)); //SIEMPRE DEVUELVE ERROR PROMISE
                    //REALIZA BIEN EL PUT PERO HAY UN ERROR QUE ES EL QUE SE RECIBE, LA RESPONSE QUEDA PERDIDA
                    const deletedMessage = {
                        title: 'Proyecto Eliminado! ',
                        description: 'Se elimina proyecto con exito.'
                    }
                    showSuccess(deletedMessage);
                    dispatch(onProyectsGetAll());
                } catch (error: any) {
                    debugger;
                };
                //vuelvo a llamar para actualizar el numero de proyectos.
                dispatch(onProyectsGetAll());
                //comparo con la cantidad, si hay menos es porque se elimino bien
                if (proyectos.lenght === props.projects.lenght) {
                    const deletedErrorMessage = {
                        title: 'Atencion! ',
                        description: 'No se pudo eliminar el proyecto: ' + selectedProject.idProyecto + ' puede tener tareas asociadas.'
                    }
                    showWarn(deletedErrorMessage);
                } else {
                    const deletedMessage = {
                        title: 'Proyecto Eliminado! ',
                        description: 'Se elimina proyecto con exito.'
                    }
                    showSuccess(deletedMessage);
                }
            }
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
        setVisibleEdit(true)
        setProyecto(selectedProject)
    }

    return (
        <div>
            <Toast ref={toast} />
            <ProjectItem
                items={props.projects}
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
                projectSelected={proyecto}
                onEdit={edit}
                onSetEditedProject={setSelectedProject}
                visible={visibleEdit}
                setVisible={setVisibleEdit}
            />

        </div >
    )
}
export default Projects;

