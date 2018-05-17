const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDwD7Kizh3qjVVA1w01s8RjEYykRdj6sYA`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry;

    return {
        direccion: location.formatted_address,
        lat: coords.location.lat,
        lng: coords.location.lng
    }
}

module.exports = {
    getLugarLatLng
}