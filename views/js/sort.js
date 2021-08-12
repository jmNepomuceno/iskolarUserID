const search_section = document.querySelector('.sort-section')
const sort_success_btn = document.querySelector('.sort-section .sort-side-section .sort-form #sort-btn')
const sort_last_name_col = document.querySelector('.sort-section .sort-body-section .sub-section .last-name-column')
const sort_last_name_rows = document.querySelectorAll('.sort-section .sort-body-section .sub-section .last-name-column .last-name-rows')
const sort_first_name_rows = document.querySelectorAll('.sort-section .sort-body-section .sub-section .first-name-column .first-name-rows')
const sort_middle_name_rows = document.querySelectorAll('.sort-section .sort-body-section .sub-section .middle-name-column .middle-name-rows')
const sort_user_id_rows = document.querySelectorAll('.sort-section .sort-body-section .sub-section .user-id-column .user-id-rows')



for(let i = 0; i < sort_last_name_rows.length; i++){
    if(i % 2 == 0){
        sort_last_name_rows[i].style.backgroundColor = "#e7c865"
        sort_first_name_rows[i].style.backgroundColor = "#e7c865"
        sort_middle_name_rows[i].style.backgroundColor = "#e7c865"
        sort_user_id_rows[i].style.backgroundColor = "#e7c865"
    }
}