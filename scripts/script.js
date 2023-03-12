var sidebar = document.querySelector('#navigator')
var content = document.querySelector('.social')
var content2 = document.querySelector('.pages')

var burg = document.querySelector('#burg')
var x = document.querySelector('#close')

burg.style.display = 'block'

function sidebaron() {

    sidebar.style.padding = '0px'
    sidebar.style.width = '0px'

    content.style.display = 'none'
    content2.style.opacity = '0%'

    x.style.display = 'none'
    burg.style.display = 'block'

}

function sidebaroff() {
     
    sidebar.style.padding = '20px'
    sidebar.style.width = '95vw'

    content.style.display = 'block'
    content2.style.opacity = '100%'

    burg.style.display = 'none'
    x.style.display = 'block'

}