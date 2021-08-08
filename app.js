const express = require('express')
const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');

app.get('/' , (req, res) =>{
    res.render('index')
})

app.get('/search' , (req, res) =>{
    console.log(req.query)
    res.render('search')
})

let port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to port ${port}`))