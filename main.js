const modalBag = document.querySelector('.bag-modal-window');



//* Функция для навигации
function goToPath(path){
    const target = document.querySelector(path)
    window.scrollTo({
        top:target.offsetTop,
        behavior:'smooth'
    })
}

function exitModalWindow(){
    modalBag.style.display = 'none'
}
function openModalWindow(){
    modalBag.style.display = 'flex'
}