const rp = require('request-promise');//полуучаем доступ до request-promise 

module.exports = async function(city = '') {
    if(!city){
        throw new Error('Имя города не может быть пустым');
        
    }

    const KEY = 'b20e248d1629605ef70f33bcde12f1ec';
    const uri = 'http://api.openweathermap.org/data/2.5/weather'; 

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    }

    try {
        const data = await rp(options);
        

        return {
            weather: `${data.name}: ${data.main.temp}`,
            error: null
        }

    } catch (error) {
        console.log('error: ', error);
        return{
            weather: null,
            error: error.error.message
        }
        
    }

   

};