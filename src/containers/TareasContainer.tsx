import Tareas from "views/Proyects/Tareas/Tareas";


const TareasContainer =(props : any)=>{

    return(
        <Tareas
        items ={props.items}
        ></Tareas>
    );
}

export default TareasContainer;