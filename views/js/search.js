const search_section = document.querySelector('.search-section')
const search_success_btn = document.querySelector('.search-section .search-side-section .search-form #search-btn')
const search_last_name_col = document.querySelector('.search-section .search-body-section .sub-section .last-name-column')
const search_last_name_rows = document.querySelectorAll('.search-section .search-body-section .sub-section .last-name-column .last-name-rows')
const search_first_name_rows = document.querySelectorAll('.search-section .search-body-section .sub-section .first-name-column .first-name-rows')
const search_middle_name_rows = document.querySelectorAll('.search-section .search-body-section .sub-section .middle-name-column .middle-name-rows')
const search_user_id_rows = document.querySelectorAll('.search-section .search-body-section .sub-section .user-id-column .user-id-rows')



for(let i = 0; i < search_last_name_rows.length; i++){
    if(i % 2 == 0){
        search_last_name_rows[i].style.backgroundColor = "#e7c865"
        search_first_name_rows[i].style.backgroundColor = "#e7c865"
        search_middle_name_rows[i].style.backgroundColor = "#e7c865"
        search_user_id_rows[i].style.backgroundColor = "#e7c865"
    }
}