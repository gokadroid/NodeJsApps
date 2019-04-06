const express = require('express')
const path = require('path')
const hbs = require('hbs')
//console.log(__dirname)
//console.log(__filename)

//Express settings

const app = express()

// to set up handle bars we have to tell express to set which templating engine we installed
//we will set view engine

app.set('view engine','hbs')
// after creating the views/index.hbs, use ti as below

// by default it shall be views folder else error comes over
// Error: Failed to lookup view "help" in views directory 
// "C:\NodeJs\NODE-COURSE\pushToGit\NodeJsApps\web-server\views"
// to overcome this set the path to new dir using below

const viewsPath=path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

//register partials to take partials into affect
const partialsPath=path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

//points to index.html, setup static directory to serve from
app.use(express.static(path.join(__dirname, '../public/')))


app.get('',(req,res)=>{
    //render will send this data back to sender rather than send, and the object we want to pass back
    //these will be referred in index.hbs file
    res.render('index', {
        name: "Govind Singh Rawat",
        title: "Weather App all the way!"
    })
})
// app.get('', (req, res) =>{

//     res.send('Hello Express World!!')
// })

/*for static help.html
app.get('/help', (req, res) =>{
    res.send('HelpPage')
})*/

//for help.hbs
app.get('/help', (req, res) =>{
    res.render('help', {
        name: "When will I receive results?",
        title: "It takes normally 8-10 months to get a response. Your case is WIP."
    })
})

/*for static about.html
app.get('/about', (req, res) =>{
    res.send('<h3>About Page</h3>')
})*/


//for about.hbs

app.get('/about', (req,res)=>{
    res.render('about', {
        name: "Name : Govind Singh Rawat",
        title: "About Weather App all the way!"
    })
})

app.get('/weather', (req, res) =>{
    
    res.send({
        location: 'Irving',
        forcast: 'Clear and Muddy'
    })
})


app.get('/help/*', (req,res)=>{
    res.render('error', {
        message: "404: This help article is not available",
        name: "Name : Govind Singh Rawat",
        title: "About Weather App all the way!"
    })
})

app.get('*', (req,res)=>{
    res.render('error', {
        message: "404: This page is not available"
    })
})
const portNo = 5484

app.listen(portNo, ()=>{
    console.log('Server is up on port', portNo)
})
