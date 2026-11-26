// 1. Кнопка, которая удаляет себя по клику
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.append(button);
}

// 2. Маркированный список со title при наведении
export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
    });

    // mouseover всплывает, поэтому достаточно одного обработчика на ul
    ul.addEventListener('mouseover', (event) => {
        const li = event.target.closest('li');
        if (li && ul.contains(li)) {
            li.setAttribute('title', li.textContent);
        }
    });

    document.body.append(ul);
}

// 3. Ссылка: первый клик дописывает href, второй - обычный переход
export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let clicked = false;

    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.getAttribute('href');
            clicked = true;
        }
        // при втором клике действие по умолчанию не отменяем
    });

    document.body.append(link);
}

// 4. Список с добавлением пунктов
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.append(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    // делегирование: работает и для новых li
    ul.addEventListener('click', (event) => {
        const item = event.target.closest('li');
        if (item && ul.contains(item)) {
            item.textContent += '!';
        }
    });

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });

    document.body.append(ul, button);
}