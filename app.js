const express = require('express')
const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');

app.get('/' , (req, res) =>{
    res.render('index')
})

app.get('/search' , (req, res) =>{
    res.render('search', {
        search_data: req.query,
        search_information : {
            last_name : req.query.last_name,
            first_name : req.query.first_name,
            middle_name : req.query.middle_name,
            user_id : req.query.user_id
        }
    })
})

let port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to port ${port}`))