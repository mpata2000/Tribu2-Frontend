import Projects from './Proyectos/Projects';

const ProyectsView = (props: any) => {

  return (
    <div >
      <Projects
       projects = {props.projects}
      />
    </div>
  );
}

export default ProyectsView
// style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}