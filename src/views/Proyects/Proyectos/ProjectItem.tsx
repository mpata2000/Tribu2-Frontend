import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel'
import { Menubar } from 'primereact/menubar'
import './ProjectItem.css'
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetTareas } from 'redux_folder/actions/tareas.actions';
import {useNavigate} from "react-router-dom";



const ProjectItem = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const tareas = useTypedSelector((state) => state.tareas.tareas);
    const showTareas = () => {
            dispatch(onGetTareas(props.selectedProject.idProyecto.toString()));
            navigate('/proyecto/tareas',{state:{tareas}});
    }

    return (
        <div>
            <Menubar model={props.buttons}></Menubar>
            <br></br>
            <Panel header="PSA - Proyectos" >
                <DataTable value={props.items} selectionMode="single" selection={props.selectedProject} onSelectionChange={(e: any) => props.setSelectedProject(e.value)}
                    onRowDoubleClick={showTareas}>
                    {/* <Column selectionMode="single" headerStyle={{ width: '3rem' }} exportable={false}></Column>  */}
                    <Column field="idProyecto" header="Id Proyecto" sortable ></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                    <Column field="fechaInicioReal" header="Fecha inicio Real"></Column>
                    <Column field="fechaFinalizacionReal" header="Fecha fin Real"></Column>
                    <Column field="fechaInicioEstimada" header="Fecha inicio Estimada"></Column>
                    <Column field="fechaFinalizacionEstimada" header="Fecha fin Estimada"></Column>
                    <Column field="fechaEntregaComunicadaACliente" header="Fecha de Entrega"></Column>
                    <Column field="horasEstimadas" header="Horas estimadas"></Column>
                    <Column field="estado" header="Estado"></Column>
                    <Column field="prioridad" header="Prioridad"></Column>
                    <Column field="idLegajo" header="Responsable"></Column>
                    {/* <Column body={showTareas} exportable={false} style={{ minWidth: '8rem' }}></Column> */}
                </DataTable>
            </Panel>
        </div>
    )
}

export default ProjectItem;

