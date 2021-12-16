import React from 'react'
import ProjectForm from './ProjectForm';
import ProjectItem from './ProjectItem';
import { useState } from 'react';
import { Alert, AlertTitle, Portal } from '@mui/material';


const proyectoDefault = {
    idProyecto: null,
    nombre: '',
    descripcion: '',
    fechaInicioReal: '',
    fechaFinalizacionReal: '',
    fechaInicioEstimada: '',
    fechaFinalizacionEstimada: '',
    idLegajo: null
}

const Projects = (props: any) => {

    const [visible, setVisible] = useState(false)
    const [selectedProject, setSelectedProject] = useState(proyectoDefault)
    const [proyecto, setProyecto] = useState(proyectoDefault)

    const buttons = [
        {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            command: () => { showNewProjectDialog() }
        },
        {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            command: () => { showEditProjectDialog() }
        },
        {
            label: 'Eliminar',
            icon: 'pi pi-fw pi-trash',
            command: () => { delete_() }
        }
    ];

    const showSuccess = () => {
        <Alert severity="success">
            <AlertTitle> Success </AlertTitle>
        </Alert>
    }


    const save = () => {
        //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST

        // dispatch(createProyect())
        // this.proyectoService.save(this.state.proyecto)
        //   setVisible(false);
        //   showSuccess();
        //   });
        //vuelvo a llamar al registro
        // dispatch(onProyectsGetAll());
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
    const showNewProjectDialog = () => {
        setVisible(true)
        setProyecto(proyectoDefault)
        showSuccess();
        //document.getElementById('proyecto-form').reset();
    }

    const showEditProjectDialog = () => {
        setVisible(true)
        setProyecto(selectedProject)

    }

    const addProjectHandler = () => {
        return ('');
    };

    const selectTitle = () => { 
        return null === proyecto.idProyecto ? 'Crear Proyecto' : 'Editar Proyecto: ' + proyecto.idProyecto;
    };
    return (
        <div>
            <ProjectItem
                items={props.projects}
                buttons={buttons}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
            <ProjectForm
                title={selectTitle()}
                project={proyecto}
                nombre={proyecto.nombre}
                descripcion={proyecto.descripcion}
                idResponsable={proyecto.idLegajo}
                fechaInicioEstimada={proyecto.fechaInicioEstimada}
                fechaFinalizacionEstimada={proyecto.fechaFinalizacionEstimada}
                fechaInicioReal={proyecto.fechaInicioReal}
                fechaFinalizacionReal={proyecto.fechaFinalizacionReal}
                onSave={save}
                visible={visible}
                setVisible={setVisible}
                setProject={setProyecto} />
        </div>
    )
}
export default Projects;