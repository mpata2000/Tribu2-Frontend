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
    const showSaveDialog = () => {
        setVisible(true)
        setProyecto(proyectoDefault)
        //document.getElementById('proyecto-form').reset();
    }

    const showEditDialog = () => {
        setVisible(true)
        setProyecto(selectedProject)

    }
    const showSuccess = () => {
        <Alert severity="success">
          <AlertTitle> Success </AlertTitle>
        </Alert>
      }
    const setTitle=()=>{
        return null != proyecto.idProyecto ? 'Editar Proyecto: ' + proyecto.idProyecto : 'Crear Proyecto';
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
                title={setTitle}
                project = {proyecto}
                nombre ={proyecto.nombre}
                descripcion ={proyecto.descripcion}
                idResponsable ={proyecto.idLegajo}
                fechaInicioEstimada ={proyecto.fechaInicioEstimada}
                fechaFinalizacionEstimada ={proyecto.fechaFinalizacionEstimada}
                fechaInicioReal ={proyecto.fechaInicioReal}
                fechaFinalizacionReal ={proyecto.fechaFinalizacionReal}
                onSave={save}
                visible={visible}
                setVisible={setVisible}
                setProject={setProyecto}></ProjectForm>
        </div>
    )
}
export default Projects;