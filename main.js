
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


document.querySelector('#inputNumber').onkeydown = function (e) {
    inputphone(e, document.querySelector('#inputNumber'))
}

//-- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --


//Функция маски формат +7 (
    function inputphone(e, phone) {
        function stop(evt) {
            evt.preventDefault();
        }
    
        let key = e.key, v = phone.value;
        let not = key.replace(/([0-9])/, '1');
    
        if (not === '1' || key === 'Backspace') {
            if (key !== 'Backspace') {
                if (v.length === 0) { phone.value = '+7('; }
                if (v.length === 6) { phone.value = v + ')'; }
                if (v.length === 10) { phone.value = v + '-'; }
                if (v.length === 13) { phone.value = v + '-'; }
                // Ограничиваем длину номера до 16 символов
                if (v.length > 16) { stop(e); }
            }
        } else { stop(e); }
    }
    
    
function checkRight(e) {
    e.preventDefault();
    if (firstName.value.length > 0) {

    }
    else {
        document.querySelector('#send-btn').disabled = true;
        firstName.style.boxShadow = 'inset 2px 2px 15px red'
    }
}

function sendForm(e) {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения из инпутов
    const firstNameValue = document.querySelector('#inputName').value;
    const phoneNumberValue = document.querySelector('#inputNumber').value;

    // Создаем объект с данными для отправки
    if(firstNameValue.length > 0 && phoneNumberValue.length > 0){

        const data = {
            firstname: firstNameValue,
            username : phoneNumberValue.replace(/[() +]/g, ''),
            from: 'store_engineering'
            // Добавьте другие данные, если необходимо
        };

        // Отправляем данные на сервер
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
    }
    else{
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


