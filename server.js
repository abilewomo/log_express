//requires
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
const methodOverride = require('method-override')
// Middleware...
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//data
const Logs = require('./models/log')
//routes
// Index (GET)= show me everything
app.get('/',(req, res)=>{
    Logs.find({}, ((error, allLogs)=>{
        res.render('Index',{
            logs:allLogs
        })
    }))
})
// New(GET) = Give me a form so I can create a thing
app.get('/logs/new', (req,res) =>{
    res.render('New')
})
// Delete(DELETE)= Get rid of the thing with this id
app.delete('/logs/:id', (req,res)=>{
    Logs.findByIdAndRemove(req.params.id, ()=>{
        res.redirect('/')
    })
})
// Update(PUT)= Update the thing with this changed form
app.put('/logs/:id',(req,res)=>{
    if(req.body.shipIsBroken=='on'){
        req.body.shipIsBroken=true
    }else{
        req.body.shipIsBroken = false
    }
    Logs.findByIdAndUpdate(req.params.id, req.body,()=>{
        res.redirect('/')
    })
})
// Create(POST)= Create a thing using this form a filled out
app.post('/logs',(req,res)=>{
    
     if(req.body.shipIsBroken === 'on'){
         req.body.shipIsBroken = true 
     } else { 
         req.body.shipIsBroken = false 
     }
     Logs.create(req.body,(error)=>{
        if(!error){
            res.redirect('/')
        }else {
                  res.send({ msg: error.message })
                 }
    })
})
// Edit(GET)= Give me a prefilled form so I can change something on the thing
app.get('/logs/:id/edit',(req,res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{
        res.render('Edit', {log:foundLog})
    })
})
// Show(GET) = show me a thing with this id
app.get('/logs/:id',(req, res) =>{
    Logs.findById(req.params.id,(err,foundLog)=>{
        res.render('Show',{log: foundLog})
    })
})

//listen
app.listen(port,()=>{
    console.log(`listening on port, ${port}`)
})