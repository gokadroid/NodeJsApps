const express = require('express')
const path = require('path')
//console.log(__dirname)
//console.log(__filename)

const app = express()

//points to index.html
app.use(express.static(path.join(__dirname, '../public/')))

// app.get('', (req, res) =>{

//     res.send('Hello Express World!!')
// })

app.get('/help', (req, res) =>{
    res.send('HelpPage')
})


app.get('/about', (req, res) =>{
    res.send('<h3>About Page</h3>')
})


app.get('/weather', (req, res) =>{
    
    res.send({
        location: 'Irving',
        forcast: 'Clear and Muddy'
    })
})

const portNo = 5484

app.listen(portNo, ()=>{
    console.log('Server is up on port', portNo)
})
