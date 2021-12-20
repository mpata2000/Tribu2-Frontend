import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel'
import { Menubar } from 'primereact/menubar'
import React, { useEffect } from 'react';
import { Button } from 'primereact/button';

const TareaItem = (props: any) => {
    //props.items[0].idProyecto (tengo)
    const botones = () => { }
    console.log(props.items);
    const getIdProject=()=>{
        if(0 === props.items.length){
            return""
        }
        else{
            return props.items[0].idProyecto.idProyecto;
        }
    }
    return (
        <div className="card">
            <Menubar model={props.buttons}></Menubar>
            <br></br>
            <Panel header={"Proyecto "+ getIdProject() + " - Tareas"} >
                <DataTable value={props.items} selectionMode="single" selection={props.selectedTarea} onSelectionChange={(e: any) => props.setSelectedTarea(e.value)}>
                    {/* <Column selectionMode="single" headerStyle={{ width: '3rem' }} exportable={false}></Column>  */}
                    <Column field="idTarea" header="Id Tarea" sortable ></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                    <Column field="fechaInicioReal" header="Fecha inicio"></Column>
                    <Column field="fechaFinalizacionReal" header="Fecha fin"></Column>
                    <Column field="horasEstimadas" header="Horas estimadas"></Column>
                    <Column field="horasTrabajadas" header="Horas trabajadas"></Column>
                    <Column field="idTicket" header="Ticket"></Column>
                    <Column field="prioridad" header="Prioridad"></Column>
                    <Column field="estado" header="Estado"></Column>
                </DataTable>
            </Panel>
        </div>
    );
}

export default TareaItem;

