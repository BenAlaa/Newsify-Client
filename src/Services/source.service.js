import http from './http.service';

const apiEndpoint = "/sources";

export async function getSources(page=1, pageSize=12) {
    return await http.get(apiEndpoint, {params: {page,pageSize}});
}

export async function editSubscription(source) {
    return await http.put(`/subscribe/switch`, {source})
}