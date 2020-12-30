import axios from 'axios';

const url = "http://localhost:5000/login"


export const login = user => axios.post(url);