import { Project } from "../projects";

export async function CacheSession (request: Promise<Project[]>):Promise<Project[]> {
    const cache = sessionStorage.getItem("projectsCache");

    if(cache) {
        return JSON.parse(cache);
    }

    const data = await request;
    sessionStorage.setItem("projectsCache", JSON.stringify(data));

    return data;
}