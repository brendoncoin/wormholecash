import axios from 'axios';
class Configuration {
  constructor(restURL) {
    this.restURL = restURL;
  }

  whcSetAutocommit(flag = true) {

    return axios.get(`${this.restURL}configuration/whcSetAutocommit/${flag}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default Configuration;
