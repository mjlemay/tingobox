declare const projectData: typeof import('./services/projectService').projectData;
declare namespace NodeJS {
    interface Process {
        resourcesPath: string;
    }
}