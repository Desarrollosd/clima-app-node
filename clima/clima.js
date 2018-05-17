const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0a154d9b52f8844cef52a546fcf6cfc6`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}