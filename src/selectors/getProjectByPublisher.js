import projects from "../data/projects";




export const getProjectsByPublisher = ( publisher ) => {
    return projects.filter( project => project.publisher === publisher);
}