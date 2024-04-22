
const modalBag = document.querySelector('.bag-modal-window');
const table = document.querySelector('.table')
const hiddenDiv = document.querySelector('#hidden')
const firstName = document.querySelector('#inputName')
const phoneNumber = document.querySelector('#inputNumber');
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

function createMask(num) {
    var mask = IMask(num, {
        mask: '+7 (000) 000-00-00',
        definitions: {
            X: {
                mask: '0',
                displayChar: 'X',
                placeholderChar: '#',
            },
        },
        lazy: false,
        overwrite: 'shift',

    });
    return mask
}
document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('inputNumber');
    var mask = createMask(element)
});

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('number');
    var mask = createMask(element)
});



// write documention for funtion


function sendFormModalWindow(e, nameID, phoneID) {
    e.preventDefault();


    const firstNameValue = document.querySelector(nameID).value
    const inputNum = document.querySelector(phoneID)
    const phoneNumberValue = createMask(inputNum)


    if (firstNameValue.length > 0 && phoneNumberValue.masked.isComplete) {

        const data = {
            firstname: firstNameValue,
            username: '7' + phoneNumberValue.unmaskedValue,
            from: 'store_engineering'

        };


        fetch('https://ssttoorree.ru/_receive_question_', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                Toastify({
                    text: "Форма успешно отправлена!",
                    duration: 3000,
                    close: false,
                    gravity: "top",
                    position: "center",
                    style: {
                        background: "#2ec720",
                        color: "#fff",
                        borderRadius: "5px",
                        padding: "5px",
                        fontFamily: "'Circe Bold', sans-serif"
                    },
                }).showToast();
            })
            .catch((error) => {
                console.error('Error:', error);
                Toastify({
                    text: "Произошла ошибка при отправке формы!",
                    duration: 3000,
                    close: false,
                    gravity: "top",
                    position: "center",
                    style: {
                        background: "#c5100f",
                        color: "#fff",
                        borderRadius: "5px",
                        padding: "5px",
                        fontFamily: "'Circe Bold', sans-serif"
                    },
                }).showToast();
            });
        firstNameValue = ''
        inputNum = ''
    }
    else {
        Toastify({
            text: "Вы не до конца заполнили форму!",
            duration: 3000,
            close: false,
            gravity: "top",
            position: "center",
            style: {
                background: "#c5100f",
                color: "#fff",
                borderRadius: "5px",
                padding: "5px",
                fontFamily: "'Circe Bold', sans-serif"
            },
        }).showToast();
    }
}
function sendForm(nameID, phoneID) {
    event.preventDefault(); // Используем параметр event для предотвращения стандартной отправки формы
    
    const firstNameValue = document.querySelector(nameID).value;
    const inputNum = document.querySelector(phoneID);
    const phoneNumberValue = createMask(inputNum);

    if (firstNameValue.length > 0 && phoneNumberValue.masked.isComplete) {
        const data = {
            firstname: firstNameValue,
            username: '7' + phoneNumberValue.unmaskedValue,
            from: 'store_engineering'
        };

        fetch('https://ssttoorree.ru/_receive_question_', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            Toastify({
                text: "Форма успешно отправлена!",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "center",
                style: {
                    background: "#2ec720",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "5px",
                    fontFamily: "'Circe Bold', sans-serif"
                },
            }).showToast();
        })
        .catch((error) => {
            console.error('Error:', error);
            Toastify({
                text: "Произошла ошибка при отправке формы!",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "center",
                style: {
                    background: "#c5100f",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "5px",
                    fontFamily: "'Circe Bold', sans-serif"
                },
            }).showToast();
        });

        // Очистка значений полей ввода после успешной отправки
        document.querySelector(nameID).value = '';
        document.querySelector(phoneID).value = '';
    } else {
        Toastify({
            text: "Вы не до конца заполнили форму!",
            duration: 3000,
            close: false,
            gravity: "top",
            position: "center",
            style: {
                background: "#c5100f",
                color: "#fff",
                borderRadius: "5px",
                padding: "5px",
                fontFamily: "'Circe Bold', sans-serif"
            },
        }).showToast();
    }
}



// JavaScript for Menu Toggle

  
