const request = require('request')
//pk.eyJ1IjoiZ292aW5kcmF3YXQiLCJhIjoiY2p1MXVvczIwMDVuZzN5c2F6YjZoMGV2OSJ9.QNaam0JPhNqa6TTCTqoHiw

// const url2 = Los%20Angeles

// request({url: url2, json: true}, (error, response) =>{
//     console.log( 'Latitude ', response.body.features[0].center[0], '. Longitude ', response.body.features[0].center[1])
//     //console.log(data.currently)
// })
//

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZ292aW5kcmF3YXQiLCJhIjoiY2p1MXVvczIwMDVuZzN5c2F6YjZoMGV2OSJ9.QNaam0JPhNqa6TTCTqoHiw&limit=1'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('UNable to contact weather service', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to locate the address', undefined)
        }else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                loc: response.body.features[0].place_name
            })
        }
    })

}

module.exports = {
    geocode: geocode}
