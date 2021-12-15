import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

//estilos css
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { onProyectsGetAll } from 'redux_folder/actions/proyects.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import ProyectsView from 'views/Proyects';
import { Alert, AlertTitle } from '@mui/material';
import Button from 'components/Button/Button';

const proyectoDefault = {
  idProyecto : null,
  nombre      : null,
  descripcion : null,
  fechaInicioReal : null,
  fechaFinalizacionReal : null,
  fechaInicioEstimada : null,
  fechaFinalizacionEstimada: null,
  idLegajo : null
}

const ProyectoContainer = (props: any) => {
  const dispatch = useDispatch();
  const proyectos = useTypedSelector((state)=> state.proyects.proyects);
  
  const [visible, setVisible] = useState(false)
  const [selectedProyecto, setSelectedProyecto] = useState(proyectoDefault)
  const [proyecto, setProyecto] = useState(proyectoDefault)

  useEffect(() => {

    dispatch(onProyectsGetAll());

  }, [])

  const items = [
    {
      label : 'Nuevo',
      icon : 'pi pi-fw pi-plus',
      command : ()=> {showSaveDialog()}
    },
    {
      label : 'Editar',
      icon : 'pi pi-fw pi-pencil',
      command : ()=> {showEditDialog()}
    },
    {
      label : 'Eliminar',
      icon : 'pi pi-fw pi-trash',
      command : ()=> {delete_()}
    }
  ];

  const showSuccess = () => {
    <Alert severity="success">
      <AlertTitle> Success </AlertTitle>
    </Alert>
  }

  const save = () => {
    //SQUAD 9 HACER EL FLUJO DEL DISPATCH COMO EL GET, PARA EL POST
    
    //dispatch(createProyect())
    /*this.proyectoService.save(this.state.proyecto)
      setVisible(false);
      showSuccess();
      })  */
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
  const showSaveDialog = () => {
    setVisible(true)
    setProyecto(proyectoDefault)
    //document.getElementById('proyecto-form').reset();
  }

  const showEditDialog = () => {
    setVisible(false)
    setProyecto(selectedProyecto)

  }

  const footer = (
    <div>
      <Button text="Guardar" icon="pi pi-check" onClick={save} />
    </div>

  );

  return (
    <ProyectsView proyecto={proyecto} proyectos={proyectos} items={items} selectedProyecto={selectedProyecto} setSelectedProyecto={setSelectedProyecto}  visible={visible} footer={footer} setVisible={setVisible} setProyecto={setProyecto} />
  )
}

export default ProyectoContainer;