import React from 'react'

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { isPropertySignature } from 'typescript';
import Button from 'components/Button/Button';
import { Calendar } from 'primereact/calendar';

const ProjectForm = (props: any) => {
    // const {proyecto, proyectos, items, selectedProyecto, setSelectedProyecto, visible, footer, setVisible, setProyecto} = props;
    const footer = (
        <div>
            <Button text="Guardar" icon="pi pi-check" onClick={props.onSave} />
        </div>
    );

    return (
        <div>
            <Dialog header={props.title} visible={props.visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => props.setVisible(false)}>
                <form id="proyecto-form">
                    <span className="p-float-label">
                        <InputText value={props.nombre} style={{ width: '100%' }} id="nombre" onChange={(e: any) => {
                            let val = e.target.value;
                            props.setProject(() => {
                                let proyect = Object.assign({}, props.project);
                                proyect.nombre = val;
                                return proyect;
                            })
                        }
                        } />
                        <label htmlFor="nombre">Nombre</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <InputText value={props.descripcion} style={{ width: '100%' }} id="descripcion" onChange={(e: any) => {
                            let val = e.target.value;
                            props.setProject(() => {
                                let proyect = Object.assign({}, props.project);
                                proyect.descripcion = val;

                                return proyect;
                            })
                        }
                        } />
                        <label htmlFor="descripcion">Descripción</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                    <Calendar selectionMode='single' value={new Date(props.fechaInicioReal)} onChange={(e) => {
                            let val = e.target.value?.toString;
                            props.onSave((prevProject: { proyecto: any; }) => {
                                let proyecto = Object.assign({}, prevProject.proyecto);
                                proyecto.fechaInicioReal = val;
                                return { proyecto };
                            })
                        }
                        } />
                        <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                    <Calendar selectionMode='single' value={new Date(props.fechaFinalizacionReal)} onChange={(e) => {
                            let val = e.target.value?.toString;
                            props.onSave((prevProject: { proyecto: any; }) => {
                                let proyecto = Object.assign({}, prevProject.proyecto);
                                proyecto.fechaFinalizacionReal = val;
                                return { proyecto };
                            })
                        }
                        } />
                        <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Calendar selectionMode='single' value={new Date(props.fechaInicioEstimada)} onChange={(e) => {
                            let val = e.target.value?.toString;
                            props.onSave((prevProject: { proyecto: any; }) => {
                                let proyecto = Object.assign({}, prevProject.proyecto);
                                proyecto.fechaInicioEstimada = val;

                                console.log(props.fechaInicioEstimada)
                                return { proyecto };
                            })
                        }
                        } />
                        <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Calendar selectionMode='single' value={new Date(props.fechafinalizacionEstimada)} onChange={(e) => {
                            let val = e.target.value?.toString;
                            props.onSave((prevProject: { proyecto: any; }) => {
                                let proyecto = Object.assign({}, prevProject.proyecto);
                                proyecto.fechafinalizacionEstimada = val;
                                return { proyecto };
                            })
                        }
                        } />
                        <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
                    </span>


                </form>
            </Dialog>
        </div>
    )
}

export default ProjectForm;