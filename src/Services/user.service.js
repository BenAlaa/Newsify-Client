import http from './http.service';

const apiEndpoint = "/users";
function getUserUrl(id){
    return `${apiEndpoint}/${id}`;
}

export function getUser(userId){
    return http.get(getUserUrl(userId));
}
export function register(user){
    return http.post(apiEndpoint,{
        name:user.name,
        email:user.email,
        password:user.password
    });
}