import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://petstore.swagger.io/v2/',
});

const serverAPI = {
   getUserDataRequest: (username) => {
      return instance.get(`user/${username}`)
         .then(response => response)
   },
   signUpRequest: (data) => {
      return instance.post('user', data)
         .then(response => response)
   }
}


export default serverAPI;