import axios from 'axios';
class Configuration {
  constructor(restURL) {
    this.restURL = restURL;
  }

  autoCommit(flag = true) {
    let final;
    if(flag === true) {
      final = 'true';
    } else {
      final = 'false';
    }

    return axios.post(`${this.restURL}configuration/autoCommit/${final}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default Configuration;
