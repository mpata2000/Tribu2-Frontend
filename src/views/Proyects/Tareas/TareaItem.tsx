import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel'
import { Menubar } from 'primereact/menubar'
import React, { useEffect } from 'react';
import { Button } from 'primereact/button';

const TareaItem = (props: any) => {

    const botones = () => { }
    return (
        <div className="card">
            <Menubar model={props.buttons}></Menubar>
            <br></br>
            <Panel header="PSA - Proyectos" >
                <DataTable value={props.items} selectionMode="single" selection={props.selectedProject} onSelectionChange={(e: any) => props.setSelectedProject(e.value)}>
                    {/* <Column selectionMode="single" headerStyle={{ width: '3rem' }} exportable={false}></Column>  */}
                    <Column field="idTarea" header="Id Proyecto" sortable ></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                    <Column field="fechaInicioReal" header="Fecha inicio Real"></Column>
                    <Column field="fechaFinalizacionReal" header="Fecha fin Real"></Column>
                    <Column field="horasEstimadas" header="Horas estimadas"></Column>
                    <Column field="horasTrabajadas" header="Horas trabajadas"></Column>
                    <Column field="idTicket" header="Ticket"></Column>
                    <Column field="prioridad" header="Prioridad"></Column>
                    <Column field="estado" header="Estado"></Column>
                    <Column body={botones} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </Panel>
        </div>
    );
}

export default TareaItem;

