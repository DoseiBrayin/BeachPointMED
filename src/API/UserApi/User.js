import axios from 'axios';

export function getUser() {
    return axios.get('http://127.0.0.1:8000/items/');
}

export function getUserId(id) {
    return axios.get('http://127.0.0.1:8000/items/' + id + '/');
}

export function createUser(user) {
    return axios.post('http://127.0.0.1:8000/items/', user);
}

