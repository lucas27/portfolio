import { exclusion } from './exclusionRule.json';

export default class Service {
    getRequest():Promise<JSON> {
        const endpoint = "https://api.github.com/users/lucas27/repos";
        const resp = fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => {
                return resp.filter(({name}: {name: string}) => {
                    return exclusion.every(value => !name.includes(value))

                })
            });
        return resp;
    }
}