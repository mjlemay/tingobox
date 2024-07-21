import { db } from './sqlLiteService';
import { projects} from '../constants/dbSchema';
import { basicProjectType, createProjectType } from '../constants/defaults';


const addProject = async (project:createProjectType) => {
    const { name, description, is_template } = project;
    const values ={
        name,
        description,
        is_template,
    };
    console.log('values', values);
    return await db.insert(projects).values(values);
}

const getProjects = async (limit:number) => {
    return await db.select().from(projects).limit(limit);
}

const updateProject = (project:basicProjectType) => {
    const { description, projectId, name } = project;
    console.log(description, projectId, name);
}

const deleteProject = (project:basicProjectType) => {
    const { projectId } = project;
    console.log('delete', projectId);
}

const projectData = { 
    addProject,
    deleteProject,
    getProjects,
    updateProject
 }

export { projectData }

