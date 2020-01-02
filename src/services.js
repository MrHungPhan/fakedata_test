import axios from 'axios';

class Service {
    constructor(){
      this.instance = axios.create({
        baseURL : 'https://jsonplaceholder.typicode.com/'
      })
    }

    get = (enpoint) => {
      return this.instance.get(`${enpoint}`);
    }

    post = (enpoint, body) => {
      return this.instance.post(`${enpoint}`, body);
    }

}

export default new Service();