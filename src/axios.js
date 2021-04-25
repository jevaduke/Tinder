const axios = require('axios').default;

const instance = axios.create({
    baseURL : "https://tinder-backend0208.herokuapp.com",
});

export default instance;