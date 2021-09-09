import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://petstore.swagger.io/v2/',
});

const serverAPI = {
   getUserDataRequest: (username) => {
      instance.get(`user/${username}`)
         .then(response => response)
   },
   signUpRequest: (data) => {
      instance.post('user', data)
         .then(response => response)
   }
}


export default serverAPI;