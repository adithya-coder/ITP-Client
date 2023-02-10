import Axios from "axios";

function returnAxiosInstance() {
    return Axios.create();
}
const headers = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      
};
export function get(url: string, header?:any) {
    const axios = returnAxiosInstance();
    return axios.get(url, header);
}

export function post(url: string, requestData: any) {
    const axios = returnAxiosInstance();
    return axios.post(url, requestData,{headers});
}

export function put(url: string, requestData: any) {
    const axios = returnAxiosInstance();
    return axios.put(url, requestData);
}

export function delete_(url: string) {
    const axios = returnAxiosInstance();
    return axios.delete(url);
}