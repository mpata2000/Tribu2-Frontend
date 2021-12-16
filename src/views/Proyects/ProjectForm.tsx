import React from 'react'

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { isPropertySignature } from 'typescript';
import Button from 'components/Button/Button';
import { Calendar } from 'primereact/calendar';
import { Input } from '@mui/material';

const ProjectForm = (props: any) => {
    // const {proyecto, proyectos, items, selectedProyecto, setSelectedProyecto, visible, footer, setVisible, setProyecto} = props;
    const footer = (
        <div>
            <Button text="Guardar" icon="pi pi-check" onClick={props.onSave} />
        </div>
    );

    const fechaInicioRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        props.setProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.proyecto);
            return { proyecto };
        })
    };
    const fechaFinalizacionRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        props.setProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.proyecto);
            proyecto.fechaFinalizacionReal = val;
            return { proyecto };
        })
    };
    const fechaInicionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        props.setProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.proyecto);
            proyecto.fechaInicioEstimado = val;
            return { proyecto };
        })
    };
    const fechaFinalizacionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        props.setProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.proyecto);
            proyecto.fechaFinalizacionEstimado = val;
            return { proyecto };
        })
    };

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
                    <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
                    <span className="p-float-label">
                        <Input type='date' value={props.fechaInicioReal} onChange={fechaInicioRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
                    <span className="p-float-label">
                        <Input type='date' value={props.fechaFinalizacionReal} onChange={fechaFinalizacionRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' value={props.fechaInicioEstimada} onChange={fechaInicionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' value={props.fechafinalizacionEstimada} onChange={fechaFinalizacionEstimadoChangeHandler} />
                    </span>


                </form>
            </Dialog>
        </div>
    )
}

export default ProjectForm;