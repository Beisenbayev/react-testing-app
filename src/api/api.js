import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://petstore.swagger.io/v2/',
});

const serverAPI = {
   getUserDataRequest: (username) => {
      return instance.get(`user/${username}`)
         .then(response => response)
         .catch(error => error);
   },
   signUpRequest: (data) => {
      const body = { id: 0, ...data };
      return instance.post('user', { body })
         .then(response => response.data)
   }
}


export default serverAPI;