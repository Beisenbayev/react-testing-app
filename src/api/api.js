import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://reqres.in/api/',
});

const serverAPI = {
   getUserDataRequest: (userId) => {
      return instance.get(`users/${userId}`)
         .then(response => response.data)
   },
   signUpRequest: (data) => {
      return instance.post('users', data)
         .then(response => response.data)
   },
}


export default serverAPI;