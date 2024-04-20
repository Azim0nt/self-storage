// import IMask from "imask";

const modalBag = document.querySelector('.bag-modal-window');
const table = document.querySelector('.table')
const hiddenDiv = document.querySelector('#hidden')

let tableOpened = false;
function showTable() {
    if (!tableOpened) {
        // Открыть таблицу
        table.style.height = 'auto';
        hiddenDiv.style.display = 'none';
        document.getElementById('show-table').innerHTML = '<img  id="hidden-btn" src="images/icons/arrow-bottom.svg" alt=""><p>Скрыть</p>'; // Изменяем содержимое кнопки
        let arrowtop = document.querySelector('#hidden-btn')
        arrowtop.style.transform = 'rotate(180deg)'
        tableOpened = true;
    } else {
        // Закрыть таблицу
        table.style.height = '300px';
        hiddenDiv.style.display = 'block';
        document.getElementById('show-table').innerHTML = '<img src="images/icons/arrow-bottom.svg" alt=""><p>Показать еще</p>'; // Изменяем содержимое кнопки
        tableOpened = false;
    }
}
//* Функция для навигации
function goToPath(path) {
    const target = document.querySelector(path)
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    })
}
//* Фунции для открывания и закрывания модального окна
function exitModalWindow() {
    modalBag.classList.remove('show');
}

function openModalWindow() {
    modalBag.classList.add('show');
}


document.querySelector('#inputNumber').onkeydown = function (e) {
    inputphone(e, document.querySelector('#inputNumber'))
}

//-- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --


//Функция маски формат +7 (
function inputphone(e, phone) {
    function stop(evt) {
        evt.preventDefault();
    }
    let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)

    if (not == 1 || 'Backspace' === not) {
        if ('Backspace' != not) {
            if (v.length < 3 || v === '') { phone.value = '+7(' }
            if (v.length === 6) { phone.value = v + ')' }
            if (v.length === 10) { phone.value = v + '-' }
            if (v.length === 13) { phone.value = v + '-' }
        }
    } else { stop(e) }
}
