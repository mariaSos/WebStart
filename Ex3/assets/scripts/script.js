//Смена цвета и текста
function changedColor() {
    // получаем элемент по его id
    let element = document.getElementById("el1");

    if (element.textContent == "Всем привет!") {
        element.style.color = "brown";
        element.textContent = "Пока!";

    }
    else {
        element.style.color = "blueviolet";
        element.textContent = "Всем привет!";

    }
}

//Функция смены цвету у списка
function changedColorList() {
    let colorList = document.querySelectorAll("li");
    colorList.forEach((item, index) => {
        // item - элемент массива на текущей итерации
        // index - порядковый номер элемента в массиве
        colorList[index].classList.add('active')
    })
}

// получаем элемент по id
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

//События при "нажатии" кнопок
btn.addEventListener('click', changedColor)
btn2.addEventListener('click', changedColorList)