const express = require('express')
const {student_lists} = require('./studentDB')
const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');

app.get('/' , (req, res) =>{
    res.render('index')
})

app.get('/search' , (req, res) =>{

    let temp_student_lists = student_lists

    if(req.query.last_name){
        let two_surnames = ["DE", "DEL" , "DELA" , "DELOS", "SAN"]
        let temp_arranged_student_lists = []

        for(let i = 0; i < student_lists.length; i++){ 
            let temp_last_name, temp_first_name = "", temp_middle_name , temp_user_id
            let start_index_first_name , end_index_first_name
            let prev_key, prev_prev_key
            let search_index_length = 0

            if(two_surnames.includes(student_lists[i].last_name)) {
                start_index_first_name = 2
                temp_last_name = student_lists[i].last_name + " " + student_lists[i].first_name
            }else{ 
                start_index_first_name = 1
                temp_last_name = student_lists[i].last_name
            } 
        
        
            for (let [key, value] of Object.entries(student_lists[i])){
                if(key == 'id'){
                    break
                }
                prev_key = key
            }

            for (let [key, value] of Object.entries(student_lists[i])){
                if(key == prev_key){
                    break
                }
                prev_prev_key = key
            }

            for (let [key, value] of Object.entries(student_lists[i])){
                search_index_length += 1
            }

            if(two_surnames.includes(student_lists[i][prev_prev_key])){
                end_index_first_name = search_index_length - 3
                temp_middle_name = student_lists[i][prev_prev_key] + " " + student_lists[i][prev_key]
            }else{
                end_index_first_name = search_index_length - 2
                temp_middle_name = student_lists[i][prev_key]
            }

            let b = 0
            let add_first_name = false

            for (let [key, value] of Object.entries(student_lists[i])){
                if(b == start_index_first_name){
                    add_first_name = true
                }

                if(b == end_index_first_name){
                    break
                }

                if(add_first_name){
                    if(b == start_index_first_name){
                        temp_first_name += value
                    }else{
                        temp_first_name = temp_first_name + " " + value
                    }
                    
                }
                b += 1
            }

            temp_arranged_student_lists.push(
                {
                    last_name : temp_last_name , first_name : temp_first_name , 
                    middle_name : temp_middle_name , id : student_lists[i].id
                }
            )
        }

        //console.log(temp_arranged_student_lists)

        temp_student_lists = temp_arranged_student_lists.filter(elem =>{
            return (
                elem.first_name == req.query.first_name.toUpperCase() &&
                elem.middle_name == req.query.middle_name.toUpperCase() &&
                elem.last_name == req.query.last_name.toUpperCase() &&
                elem.id == req.query.user_id
            )
        })
    }
 
    res.render('search', {
        search_data: req.query,
        search_information : {
            last_name : req.query.last_name,
            first_name : req.query.first_name,
            middle_name : req.query.middle_name,
            user_id : req.query.user_id
        },
        student_lists : temp_student_lists
    })
})

let port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to port ${port}`))