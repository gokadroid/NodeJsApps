const https = require('https')
const url = 'https://api.darksky.net/forecast/a92a622ea8d128ddee65bcfa857047d2/40,-75'

const request = https.request(url, (response)=>{

    let data = ''
    response.on('data', (chunk)=>{
        data+= chunk.toString()
        //console.log(chunk.toString())
    })
    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()
