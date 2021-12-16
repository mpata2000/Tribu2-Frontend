import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//estilos css
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { onProyectsGetAll , createProyect } from 'redux_folder/actions/proyects.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import ProyectsView from 'views/Proyects';
import { Alert, AlertTitle, Portal } from '@mui/material';
import NewProject from './NewProject';

const proyectoDefault = {
  idProyecto: null,
  nombre: null,
  descripcion: null,
  fechaInicioReal: null,
  fechaFinalizacionReal: null,
  fechaInicioEstimada: null,
  fechaFinalizacionEstimada: null,
  idLegajo: null
}

const ProyectoContainer = (props: any) => {
  const dispatch = useDispatch();
  const proyectos = useTypedSelector((state) => state.proyects.proyects);

  //const [visible, setVisible] = useState(false)
  // const [selectedProyecto, setSelectedProyecto] = useState(proyectoDefault)
  //const [proyecto, setProyecto] = useState(proyectoDefault)

  useEffect(() => {

    dispatch(onProyectsGetAll());

  }, [])

  // const items = [
  //   {
  //     label: 'Nuevo',
  //     icon: 'pi pi-fw pi-plus',
  //     command: () => { showSaveDialog() }
  //   },
  //   {
  //     label: 'Editar',
  //     icon: 'pi pi-fw pi-pencil',
  //     command: () => { showEditDialog() }
  //   },
  //   {
  //     label: 'Eliminar',
  //     icon: 'pi pi-fw pi-trash',
  //     command: () => { delete_() }
  //   }
  // ];

  const showSuccess = () => {
    <Alert severity="success">
      <AlertTitle> Success </AlertTitle>
    </Alert>
  }


  const save = () => {
    //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST

    //todo: Hay que pasar el objeto con los datos a guardar.
     //dispatch(createProyect(data))
    // this.proyectoService.save(this.state.proyecto)
    //   setVisible(false);
    //   showSuccess();
    //   });
    //vuelvo a llamar al registro

    dispatch(onProyectsGetAll());
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
  // const showSaveDialog = () => {
  //   setVisible(true)
  //   setProyecto(proyectoDefault)
  //   //document.getElementById('proyecto-form').reset();
  // }

  // const showEditDialog = () => {
  //   setVisible(true)
  //   setProyecto(selectedProject)

  // }

  // const footer = (
  //   <div>
  //     <Button text="Guardar" icon="pi pi-check" onClick={save} />
  //   </div>

  // );

  const addProjectHandler = () => {
     return ('');
    };


  return (
    <div>
      <ProyectsView
        projects={proyectos}
        />
      <NewProject onAddProject={addProjectHandler} ></NewProject>
    </div>
  )
}

export default ProyectoContainer;