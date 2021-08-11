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
        let temp_last_name, temp_first_name = "", temp_middle_name , temp_user_id
        let temp_last_name_arr = []
        let start_index_first_name , end_index_first_name
        let prev_key, prev_prev_key
        let search_index = 0, search_index_length = 0
        let two_surnames = ["DE", "DEL" , "DELA" , "DELOS", "SAN"]
        let temp_arranged_student_lists = []

        for(let i = 0; i < student_lists.length; i++){ 
            if(two_surnames.includes(student_lists[i].last_name)) {
                temp_last_name_arr.push(student_lists[i].last_name + " " + student_lists[i].first_name)
            }else{ 
                temp_last_name_arr.push(student_lists[i].last_name)
            } 
        }
        
        for(let i = 0; i < student_lists.length; i++){
            if(req.query.last_name.toUpperCase() == temp_last_name_arr[i]){
                temp_last_name = temp_last_name_arr[i]
                search_index = i

                if(two_surnames.includes(student_lists[i].last_name)) {
                    start_index_first_name = 2
                }else{ 
                    start_index_first_name = 1
                } 

                break
            }
        }

        for (let [key, value] of Object.entries(student_lists[search_index])){
            if(key == 'id'){
                break
            }
            prev_key = key
        }

        for (let [key, value] of Object.entries(student_lists[search_index])){
            if(key == prev_key){
                break
            }
            prev_prev_key = key
        }

        for (let [key, value] of Object.entries(student_lists[search_index])){
            search_index_length += 1
        }

        if(two_surnames.includes(student_lists[search_index][prev_prev_key])){
            end_index_first_name = search_index_length - 3
            temp_middle_name = student_lists[search_index][prev_prev_key] + " " + student_lists[search_index][prev_key]
        }else{
            end_index_first_name = search_index_length - 2
            temp_middle_name = student_lists[search_index][prev_key]
        }

        let b = 0
        let add_first_name = false

        for (let [key, value] of Object.entries(student_lists[search_index])){
            if(b == start_index_first_name){
                add_first_name = true
            }

            if(b == end_index_first_name){
                break
            }

            if(add_first_name){
                temp_first_name = temp_first_name + value + " "
            }
            b += 1
        }

        for(let i = 0; i < student_lists.length; i++){

        }

        temp_student_lists = student_lists.filter(elem =>{
            return (
                temp_first_name == req.query.first_name.toUpperCase() &&
                temp_middle_name == req.query.middle_name.toUpperCase() &&
                temp_last_name == req.query.last_name.toUpperCase() 
                //elem.id == req.query.user_id
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