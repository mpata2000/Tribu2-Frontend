import ProjectForm from "views/Proyects/ProjectForm";

const NewProject = (props: any) => {
    const saveProjectDataHandler = (enteredProjectData: any) => {
        const project = {
            ...enteredProjectData,
            // id: Math.random.toString()
        };
        props.onAddExpense(project);
    };
    return (
        <div>
            <ProjectForm>
                onSaveProjectData={saveProjectDataHandler}
            </ProjectForm>
        </div>
    );
}

export default NewProject;