import http from './http.service';

const apiEndpoint = "/news";

export async function getNews(page=1, pageSize=12) {
    return await http.get(apiEndpoint, {params: {page,pageSize}});
}