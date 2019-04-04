const fs = require('fs')

const buffer = fs.readFileSync('1-json.json')
console.log(buffer.toString())
jsonDataFromFile = JSON.parse((buffer.toString()))
console.log(jsonDataFromFile.name, jsonDataFromFile.age)
jsonDataFromFile.name = 'Kiaan Singh Rawat'
jsonDataFromFile.age = 1
console.log(jsonDataFromFile.name, jsonDataFromFile.age)
fs.writeFileSync('1-json.json',  JSON.stringify(jsonDataFromFile))