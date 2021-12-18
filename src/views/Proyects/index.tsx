import React from 'react'


import ProjectForm from './ProjectForm';
import Projects from './Projects';

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

const ProyectsView = (props: any) => {

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }} >
      <Projects
       projects = {props.projects}
      />
    </div>
  );
}

export default ProyectsView
