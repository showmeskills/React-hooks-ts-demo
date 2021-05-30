import axios from 'axios';

const todoApi = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com/"
})

export default todoApi;