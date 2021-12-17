import React, { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectItem from './ProjectItem';
import { useDispatch } from 'react-redux';
import { createProyect, onProyectsGetAll } from 'redux_folder/actions/proyects.actions';


const proyectoDefault = {
    idProyecto: null,
    nombre: '',
    descripcion: '',
    fechaInicioReal: '',
    fechaFinalizacionReal: '',
    fechaInicioEstimada: '',
    fechaFinalizacionEstimada: '',
    fechaEntregaComunicadaACliente: '',
    horasEstimadas: null,
    prioridad: '',
    estado: ''
}

const Projects = (props: any) => {

    const [visible, setVisible] = useState(false)
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
            command: () => { delete_() }
        }
    ];

    const showSuccess = () => {
        window.alert('Proyecto creado con exito.')
    }

    const save = (enteredProject) => {
        console.log(enteredProject);
        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST

        dispatch(createProyect(enteredProject));
        // this.proyectoService.save(this.state.proyecto)
        setVisible(false);
        showSuccess();
        //vuelvo a llamar al registro
        //dispatch(onProyectsGetAll());
    }

    const delete_ = () => {

        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL DELETE

        /*if(window.confirm("¿Desea elminar el registro?")){
            dispatch(onProjectDelete(selectedProyecto.idProyecto))
            //alert('el registro fue borrado');
            showSuccess();
            dispatch(onProyectsGetAll());
      
          });
        }*/
    }
    const showSaveDialog = () => {
        setVisible(true)
        setProyecto(proyectoDefault)
        //document.getElementById('proyecto-form').reset();
    }

    const showEditDialog = () => {
        setVisible(true)
        setProyecto(selectedProject)

    }

    return (
        <div>
            <ProjectItem
                items={props.projects}
                buttons={buttons}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
            <ProjectForm
                project={proyecto}
                nombre={proyecto.nombre}
                descripcion={proyecto.descripcion}
                fechaInicioEstimada={proyecto.fechaInicioEstimada}
                fechaFinalizacionEstimada={proyecto.fechaFinalizacionEstimada}
                fechaInicioReal={proyecto.fechaInicioReal}
                fechaFinalizacionReal={proyecto.fechaFinalizacionReal}
                fechaEntrega={proyecto.fechaEntregaComunicadaACliente}
                horasEstimadas={proyecto.horasEstimadas}
                prioridad={proyecto.prioridad}
                estado={ proyecto.estado}
                onSave={save}
                visible={visible}
                setVisible={setVisible}
                setProject={setProyecto}></ProjectForm>
        </div >
    )
}
export default Projects;