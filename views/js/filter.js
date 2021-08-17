const search_section = document.querySelector('.filter-section')

const filter_success_btn = document.querySelector('.filter-section .filter-side-section .filter-form #filter-btn')
const filter_first_name_input = document.querySelector('.filter-section .filter-side-section .filter-form #first-name-input')
const filter_last_name_input = document.querySelector('.filter-section .filter-side-section .filter-form #last-name-input')
const filter_middle_name_input = document.querySelector('.filter-section .filter-side-section .filter-form #middle-name-input')
const filter_from_user_id_input = document.querySelector('.filter-section .filter-side-section .filter-form #from-user-id-input')
const filter_to_user_id_input = document.querySelector('.filter-section .filter-side-section .filter-form #to-user-id-input')

const filter_last_name_col = document.querySelector('.filter-section .filter-body-section .sub-section .last-name-column')
const filter_last_name_rows = document.querySelectorAll('.filter-section .filter-body-section .sub-section .last-name-column .last-name-rows')
const filter_first_name_rows = document.querySelectorAll('.filter-section .filter-body-section .sub-section .first-name-column .first-name-rows')
const filter_middle_name_rows = document.querySelectorAll('.filter-section .filter-body-section .sub-section .middle-name-column .middle-name-rows')
const filter_user_id_rows = document.querySelectorAll('.filter-section .filter-body-section .sub-section .user-id-column .user-id-rows')

filter_first_name_input.addEventListener('click', ()=> {

    if(filter_first_name_input.value.length >= 1){
        filter_last_name_input.disabled = true
        filter_middle_name_input.disabled = true
        filter_from_user_id_input.disabled = true
        filter_to_user_id_input.disabled = true

        filter_last_name_input.style.opacity = '0.5'
        filter_middle_name_input.style.opacity = '0.5'
        filter_from_user_id_input.style.opacity = '0.5'
        filter_to_user_id_input.style.opacity = '0.5'
    }else{
        filter_last_name_input.disabled = false
        filter_middle_name_input.disabled = false
        filter_from_user_id_input.disabled = false
        filter_to_user_id_input.disabled = false

        filter_last_name_input.style.opacity = '1'
        filter_middle_name_input.style.opacity = '1'
        filter_from_user_id_input.style.opacity = '1'
        filter_to_user_id_input.style.opacity = '1'
    }
    
}, false)

// filter_last_name_input.addEventListener('keypress', ()=> {
//     filter_first_name_input.disabled = true
//     filter_middle_name_input.disabled = true
//     filter_from_user_id_input.disabled = true
//     filter_to_user_id_input.disabled = true

//     filter_first_name_input.style.opacity = '0.5'
//     filter_middle_name_input.style.opacity = '0.5'
//     filter_from_user_id_input.style.opacity = '0.5'
//     filter_to_user_id_input.style.opacity = '0.5'
// }, false)

// filter_middle_name_input.addEventListener('keypress', ()=> {
//     filter_first_name_input.disabled = true
//     filter_last_name_input.disabled = true
//     filter_from_user_id_input.disabled = true
//     filter_to_user_id_input.disabled = true

//     filter_first_name_input.style.opacity = '0.5'
//     filter_last_name_input.style.opacity = '0.5'
//     filter_from_user_id_input.style.opacity = '0.5'
//     filter_to_user_id_input.style.opacity = '0.5'
// }, false)

// filter_from_user_id_input.addEventListener('keypress', ()=> {
//     filter_first_name_input.disabled = true
//     filter_last_name_input.disabled = true
//     filter_middle_name_input.disabled = true

//     filter_first_name_input.style.opacity = '0.5'
//     filter_last_name_input.style.opacity = '0.5'
//     filter_middle_name_input.style.opacity = '0.5'
    
// }, false)

for(let i = 0; i < filter_last_name_rows.length; i++){
    if(i % 2 == 0){
        filter_last_name_rows[i].style.backgroundColor = "#e7c865"
        filter_first_name_rows[i].style.backgroundColor = "#e7c865"
        filter_middle_name_rows[i].style.backgroundColor = "#e7c865"
        filter_user_id_rows[i].style.backgroundColor = "#e7c865"
    }
}