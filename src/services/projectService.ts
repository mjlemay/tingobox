const { db } = require('./sqlLiteService');

const getProjects = () => {
    try {
        const query = `SELECT * FROM project`
        const readQuery = db.prepare(query)
        const rowList = readQuery.all()
        return rowList
    } catch (err) {
        console.error(err)
        throw err
    }
}

const insertProject = (name:string) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO project (name) VALUES ('${name}')`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run()
            console.log(
                `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into project`
            )
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

module.exports = {
    getProjects,
    insertProject,
}