const header = document.querySelector('header')
const header_fade = document.querySelector('.header-color-fade-div')

const search_div = document.querySelector('.search-div')
const search_section = document.querySelector('.search-section')
const search_btn = document.querySelector('.search-div #search-btn');

const sort_div = document.querySelector('.sort-div')
const filter_div = document.querySelector('.filter-div')

search_btn.addEventListener('click',()=>{
    header.style.top = '-60%'
    header_fade.style.top = '-10%'

    search_div.style.display = 'none'
    sort_div.style.display = 'none'
    filter_div.style.display = 'none'
    
    search_section.style.left = '0'
},false)
