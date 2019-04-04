const request = require('request')

const forecast = (lat, long, callback)=>{

    const url = 'https://api.darksky.net/forecast/a92a622ea8d128ddee65bcfa857047d2/'+lat+','+long

request({url: url, json: true}, (error, response) =>{
    if(error){
        callback('Issue invoking the location services', undefined)
    }else if(!response.body.currently){
        callback('Geo coordinates provided are not proper', undefined)
    }else{
        callback(undefined, {
            temp: response.body.currently.temperature,
            prec: response.body.currently.precipProbability
        })
    }
    //console.log('It is currently', response.body.currently.temperature, 'degrees out. There is a', response.body.currently.precipProbability+'% chance of rain.' )
    //console.log(data.currently)
})

}

module.exports = {
    forecast: forecast
}