import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//estilos css
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { onProyectsGetAll } from 'redux_folder/actions/proyects.actions';
import useTypedSelector from 'hooks/useTypedSelector';
import ProyectsView from 'views/Proyects';

const ProyectoContainer = (props: any) => {
  const dispatch = useDispatch();
  const proyectos = useTypedSelector((state) => state.proyects.proyects);

  useEffect(() => {

    dispatch(onProyectsGetAll());

  }, [])
  
  return (
    <div>
      <ProyectsView
        projects={proyectos}
        />
    </div>
  )
}

export default ProyectoContainer;