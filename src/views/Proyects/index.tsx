import Projects from './Proyectos/Projects';

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
