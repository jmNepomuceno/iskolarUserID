const express = require('express')
const app = express()

app.get('/' , (req, res) =>{
    res.send('Kyla Denzelle')
})

let port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to port ${port}`))