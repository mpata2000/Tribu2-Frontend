import React from 'react'

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel'
import {Menubar} from 'primereact/menubar'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const ProyectsView = (props: any) => {

    const {proyecto, proyectos, items, selectedProyecto, setSelectedProyecto, visible, footer, setVisible, setProyecto} = props;

    return (
        <div style={{width:'80%', margin: '0 auto',marginTop: '20px' }} >
        <Menubar model={items}></Menubar>
        <br></br>
        <Panel header="PSA - Proyectos" >
    
        <DataTable value={proyectos} selectionMode="single" selection={selectedProyecto} onSelectionChange={(e:any) => setSelectedProyecto(e.value)}>
          <Column field="idProyecto" header="Id Proyecto"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="descripcion" header="Descripcion"></Column>
          <Column field="fechaInicioReal" header="Fecha inicio Real"></Column>
          <Column field="fechaFinalizacionReal" header="Fecha fin Real"></Column>
          <Column field="fechaInicioEstimada" header="Fecha inicio Estimada"></Column>
          <Column field="fechaFinalizacionEstimada" header="Fecha fin Estimada"></Column>
          <Column field="idLegajo" header="Responsable"></Column>
        </DataTable>
        </Panel>
        <Dialog header="Crear/Editar de Proyecto" visible={visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => setVisible(false)}>
        <form id="proyecto-form"> 
        <span className="p-float-label">
        <InputText value={proyecto.nombre} style={{width : '100%'}} id="nombre" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.nombre = val;
    
                            return proyect ;
                        })}
                      } />
           <label htmlFor="nombre">Nombre</label>
        </span>   
        <br/>
        <span className="p-float-label">
        <InputText value={proyecto.descripcion} style={{width : '100%'}} id="descripcion" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.descripcion = val;
    
                            return proyect ;
                        })}
                      } />
           <label htmlFor="descripcion">Descripción</label>
        </span>   
        <br/>    
        <span className="p-float-label">  
              <InputText value={proyecto.fechaInicioReal} style={{width : '100%'}} id="fechaInicioReal" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.fechaInicioReal = val;
    
                            return proyect ;
                        })}
                      } />
                 <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
          </span>   
          <br/>           
          <span className="p-float-label">  
              <InputText value={proyecto.fechaFinalizacionReal} style={{width : '100%'}} id="fechaFinalizacionReal" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.fechaFinalizacionReal = val;
    
                            return proyect ;
                        })}
                      } />
                 <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
          </span>   
          <br/>           
          <span className="p-float-label">  
              <InputText value={proyecto.fechaInicioEstimada} style={{width : '100%'}} id="fechaInicioEstimada" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.fechaInicioEstimada = val;
    
                            return proyect ;
                        })}
                      } />
                 <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
          </span>    
          <br/>           
          <span className="p-float-label">  
              <InputText value={proyecto.fechaFinalizacionEstimada} style={{width : '100%'}} id="fechaFinalizacionEstimada" onChange={(e:any) => {
                        let val = e.target.value;
                        setProyecto(() => {
                            let proyect = Object.assign({}, proyecto);
                            proyect.fechaFinalizacionEstimada = val;
    
                            return proyect ;
                        })}
                      } />
                 <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
          </span>    
               
               
          </form>
      </Dialog>
        </div>
);}

export default ProyectsView
