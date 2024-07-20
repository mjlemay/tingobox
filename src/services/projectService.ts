import { db } from './sqlLiteService';
import { basicProjectType } from '../constants/defaults';

const addProject = (project:basicProjectType) => {
    const { name, description } = project;
    try {
        const insertQuery = db.prepare(
            `INSERT INTO projects (name, description) VALUES ('${name}', '${description}')`
        );

        const transaction = db.transaction(() => {
            const info = insertQuery.run();
            console.log(
                `Inserted ${info.changes} rows with last ID 
                ${info.lastInsertRowid} into project`
            );
        });
        transaction();
    } catch (err) {
        console.error(err);
        throw err;
    }
}


const getProjects = (limit:number) => {
    let limitVal = limit ? ` LIMIT ${limit}` : '';
    try {
        const query = `SELECT * FROM projects${limitVal}`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all();
        return rowList;
    } catch (err) {
        console.error(err);
        return []
    }
}

const updateProject = (project:basicProjectType) => {
    const { description, projectId, name } = project;
    try {
        console.log('projectId', projectId);
        const updateQuery = db.prepare(
            `UPDATE projects SET name = '${name}', description = '${description}' WHERE projectId = ${projectId}`
        );
        const transaction = db.transaction(() => {
            const info = updateQuery.run();
            console.log(JSON.stringify(info));
            console.log(
                `Updated ${info.changes} rows with last ID 
                ${info.lastInsertRowid} into project`
            );
        });
        transaction();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const projectData = { 
    addProject,
    getProjects,
    updateProject
 }

export { projectData }

