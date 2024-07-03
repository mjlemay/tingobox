import { db } from './sqlLiteService';

type basicProject = {
    name:string;
    description: string;
}

const getProjects = () => {
    try {
        const query = `SELECT * FROM projects`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all();
        return rowList;
    } catch (err) {
        console.error(err);
        return []
    }
}
const addProject = (project:basicProject) => {
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

export { getProjects, addProject }

