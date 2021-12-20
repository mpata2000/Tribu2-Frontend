import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel'
import { Menubar } from 'primereact/menubar'
import './ProjectItem.css'
import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import TareasContainer from 'containers/TareasContainer';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { onGetTareas } from 'redux_folder/actions/tareas.actions';


const ProjectItem = (props: any) => {
    const dispatch = useDispatch();
    const state = useTypedSelector((state) => state.tareas);
    // const tareas = state.tareas;


    if(state.loading){
        return (
            <h2>Loading...</h2>
        )
    }

    const showTareas = () => {
        const tareas = dispatch(onGetTareas(props.selectedProject.idProyecto));
        console.log(tareas);
        return (
            <TareasContainer
                items={tareas}
            />
        );
        // debugger;
        // return (
        //     <React.Fragment>
        //         <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => redirigir()} />
        //     </React.Fragment>);
    }

    return (
        <div className="card">
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
                    <Column body={showTareas} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default ProjectItem;

