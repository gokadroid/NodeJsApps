const chalk = require('chalk')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode.geocode('Village Ginthali, Pauri, Uttaranchal', (error, data)=>{
    console.log(chalk.red('Error'), error)
    console.log(chalk.green('Data'), data)
})



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast.forecast(-75.7088, 44.1545, (error, data) => {
    console.log(chalk.red('Error'), error)
    console.log(chalk.green('Data'), data)
})