import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel'
import { Menubar } from 'primereact/menubar'


const ProjectItem = (props: any) => {


    return (
        <div>
            <Menubar model={props.buttons}></Menubar>
            <br></br>
            <Panel header="PSA - Proyectos" >
                <DataTable value={props.items} selectionMode="single" selection={props.selectedProject} onSelectionChange={(e: any) => props.setSelectedProject(e.value)}>
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
        </div>
    )
}

export default ProjectItem;