// 1. 
// За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.

function runWindowSequence(){
    const newWindow = window.open('', '', 'width = 300, height = 300');

    setTimeout(() => {
        newWindow.resizeTo(500, 500);

    setTimeout(() => {
        newWindow.moveTo(200, 200);

    setTimeout(() => {
        newWindow.close();
    }, 2000);
    }, 2000);
    }, 2000);
};


// 2. 
// Для заданої HTML-сторінки:

// <p id ='text'>I learning JavaScript events!</p> 
// <div>
// 	<button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), 
// яка спрацьовуватиме по кліку на кнопку і 
// змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий,
// розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".

function changeCSS(){
    const paragraph = document.getElementById('text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
};


// 3. 
// Задано сторінку з 3 кнопками і 1 лінкою. 
// Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на 
// кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий.
//      При відпусканні – білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
// 	Приклад – курсор наведений на лінку.


function makeBlue(){
    document.body.style.backgroundColor = 'blue';
};
function makePink(){
    document.body.style.backgroundColor = 'pink';
};
function makeBrown(){
    document.body.style.backgroundColor = 'brown';
};
function makeWhite(){
    document.body.style.backgroundColor = 'white';
};
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
};



4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний
 елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

 

