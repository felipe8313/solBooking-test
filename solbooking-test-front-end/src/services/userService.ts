import { userRoutes } from "./apiRoutes";
import { requestConfig } from "./helpers";
import { User } from "../model/user";

const doLogin = (username: string, password: string): Promise<User> => {

    const request: RequestInit = {
        ...requestConfig
    };

    const url = userRoutes.doLogin
        .replace(':username', username)
        .replace(':password', password);

    return fetch(url, request)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Error creating hotel');
        })
        .then(result => result);
}

export const userService = {
    doLogin
}