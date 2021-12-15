import React, {Component , useDispatch} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel'
import {Menubar} from 'primereact/menubar'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';


//estilos css
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { onProyectsGetAll } from 'redux_folder/actions/proyects.actions';
import useTypedSelector from 'hooks/useTypedSelector';

export default class ProyectoContainer extends Component{
//constructor
  constructor(){
    this.dispatch = useDispatch();
    super();
    this.showSuccess = this.showSuccess.bind(this);
    this.state = {
        visible : false,
        proyecto : {
          idProyecto : null,
          nombre      : null,
          descripcion : null,
          fechaInicioReal : null,
          fechaFinalizacionReal : null,
          fechaInicioEstimada : null,
          fechaFinalizacionEstimada: null,
          idLegajo : null
        },
        selectedProyecto:{
        },
        proyectos:useTypedSelector((state)=> state.proyects.proyects)
    };
    this.items = [
      {
        label : 'Nuevo',
        icon : 'pi pi-fw pi-plus',
        command : ()=> {this.showSaveDialog()}
      },
      {
        label : 'Editar',
        icon : 'pi pi-fw pi-pencil',
        command : ()=> {this.showEditDialog()}
      },
      {
        label : 'Eliminar',
        icon : 'pi pi-fw pi-trash',
        command : ()=> {this.delete()}
      }
    ];
    this.proyectoService=new ProyectoService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);

    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>

    );
  }

  showSuccess() {
    this.toast.show({severity:'success', summary: 'Atención!', detail:'El proyecto fue actualizado correcamente', life: 3000});
}
//ciclo de vida
componentDidMount(){
  this.dispatch(onProyectsGetAll());

}

save() {
  /*this.proyectoService.save(this.state.proyecto).then(data => {
    this.setState({
      visible: false
    });
    this.showSuccess();
    })  */
    //vuelvo a llamar al registro
    this.dispatch(onProyectsGetAll());
}

delete(){
  /*if(window.confirm("¿Desea elminar el registro?")){
    this.proyectoService.delete(this.state.selectedProyecto.idProyecto).then(data => {
      //alert('el registro fue borrado');
      this.showSuccess();
      this.proyectoService.getAll().then(data => this.setState({proyectos: data}));

    });
  }*/
}


render(){
  return (
    <div style={{width:'80%', margin: '0 auto',marginTop: '20px' }} >
        <Menubar model={this.items}></Menubar>
        <br></br>
        <Panel header="PSA - Proyectos" >
    
        <DataTable value={this.state.proyectos} selectionMode="single" selection={this.state.selectedProyecto} onSelectionChange={e => this.setState({ selectedProyecto: e.value })}>
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
        <Dialog header="Crear/Editar de Proyecto" visible={this.state.visible} style={{ width: '400px' }} footer={this.footer} modal={true} onHide={() => this.setState({visible:false})}>
        <form id="proyecto-form"> 
        <span className="p-float-label">
        <InputText value={this.state.proyecto.nombre} style={{width : '100%'}} id="nombre" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.nombre = val;
    
                            return { proyecto };
                        })}
                      } />
           <label htmlFor="nombre">Nombre</label>
        </span>   
        <br/>
        <span className="p-float-label">
        <InputText value={this.state.proyecto.descripcion} style={{width : '100%'}} id="descripcion" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.descripcion = val;
    
                            return { proyecto };
                        })}
                      } />
           <label htmlFor="descripcion">Descripción</label>
        </span>   
        <br/>    
        <span className="p-float-label">  
              <InputText value={this.state.proyecto.fechaInicioReal} style={{width : '100%'}} id="fechaInicioReal" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.fechaInicioReal = val;
    
                            return { proyecto };
                        })}
                      } />
                 <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
          </span>   
          <br/>           
          <span className="p-float-label">  
              <InputText value={this.state.proyecto.fechaFinalizacionReal} style={{width : '100%'}} id="fechaFinalizacionReal" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.fechaFinalizacionReal = val;
    
                            return { proyecto };
                        })}
                      } />
                 <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
          </span>   
          <br/>           
          <span className="p-float-label">  
              <InputText value={this.state.proyecto.fechaInicioEstimada} style={{width : '100%'}} id="fechaInicioEstimada" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.fechaInicioEstimada = val;
    
                            return { proyecto };
                        })}
                      } />
                 <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
          </span>    
          <br/>           
          <span className="p-float-label">  
              <InputText value={this.state.proyecto.fechaFinalizacionEstimada} style={{width : '100%'}} id="fechaFinalizacionEstimada" onChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                            let proyecto = Object.assign({}, prevState.proyecto);
                            proyecto.fechaFinalizacionEstimada = val;
    
                            return { proyecto };
                        })}
                      } />
                 <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
          </span>    
               
               
          </form>
      </Dialog>
      <Toast ref={(el) => this.toast = el} />
        </div>
);} //fin render

    showSaveDialog(){
      this.setState({
        visible : true,
        proyecto : {
          idProyecto : null,
          nombre      : null,
          descripcion : null,
          fechaInicioReal : null,
          fechaFinalizacionReal : null,
          fechaInicioEstimada : null,
          fechaFinalizacionEstimada: null,
          idLegajo : null
        }
      });
      //document.getElementById('proyecto-form').reset();
    }

    showEditDialog(){
      this.setState({
        visible : true,
        proyecto : {
          idProyecto : this.state.selectedProyecto.idProyecto,
          nombre      : this.state.selectedProyecto.nombre,
          descripcion : this.state.selectedProyecto.descripcion,
          fechaInicioReal : this.state.selectedProyecto.fechaInicioReal,
          fechaFinalizacionReal : this.state.selectedProyecto.fechaFinalizacionReal,
          fechaInicioEstimada : this.state.selectedProyecto.fechaInicioEstimada,
          fechaFinalizacionEstimada: this.state.selectedProyecto.fechaFinalizacionEstimada,
          idLegajo : this.state.selectedProyecto.idLegajo
        }
      });

    }

}