function task1() {
    let a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert(c);
    // сначала выполнается увеличение а на 1, а потом запись
    d = b++;
    alert(d);
    // сначала записывается переменная, а потом она увеличивается на 1
    c = 2 + ++a;
    alert(c);
    // сначала выполнается увеличение а на 1, а потом вычисление, НО! из ранее выполненного а уже 2 Как выражение: 2+ ((2)+1)
    d = 2 + b++;
    alert(d);
    // сначала выполняется вычисление 2+ ранее увеличенная b равная 2, записывается, а потом увеличивается b на 1
    alert(a);
    alert(b);
    // при каждом  использовании ++ не зависимо от стороны перезаписывается переменая на +1
}

function task2() {
    let a = 2;
    let x = 1 + (a *= 2);
    alert("x = " + x);
    alert("a = " + a);
    // сначала а умноджается на 2 и в а записывается итог
    // потом происходит сложение 
}

function randomaze(max) {
    var a = Math.ceil(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1);
    return (a);
}

function task3() {
    let a, b, max = 10;
    a = randomaze(max);
    console.log(a);
    b = randomaze(max);
    console.log(b);
    if (a >= 0 & b >= 0)
        alert("Если a = " + a + ", а b = " + b + ", то a - b = " + (a - b) +
            " и b - a = " + (b - a));
    else {
        if (a < 0 & b < 0)
            alert("Если a = " + a + ", а b = " + b + ", то a * b = " + (a * b));
        else
            alert("Если a = " + a + ", а b = " + b + ", то a + b = " + (a + b));
    }
}

function plus(a, b) {
    return (parseInt(a, 10) + Number(b, 10));
}

function minus(a, b) {
    return (a - b);
}

function division(a, b) {
    return (a / b);
}

function multiplication(a, b) {
    return (a * b);
}

function task4() {
    let a, b;
    a = prompt('Введите первое число для вычислений', '');
    while (isNaN(a)) {

        a = prompt('Это неверное число, повторите попытку ', '');
    }
    b = prompt('Введите второе число для вычислений', '');

    while (isNaN(b)) {
        b = prompt('Это неверное число, повторите попытку ', '');
    }

    alert("Сложение: " + plus(a, b) + " Вычитание: " + minus(a, b) + " Деление: " + division(a, b) +
        " Умножение: " + multiplication(a, b));

}

function mathOperation(arg1, arg2, operation) {
    let finish;
    switch (operation) {
        case '1':
            finish = plus(arg1, arg2);
            break;
        case '2':
            finish = minus(arg1, arg2);
            break;
        case '3':
            finish = multiplication(arg1, arg2);
            break;
        case '4':
            finish = division(arg1, arg2);
            break;
        default:
            alert("Такая операция не предусмотрена");
    }
    return finish;

}

function task5() {
    let a, b;
    a = prompt('Введите первое число для вычислений', '');
    while (isNaN(a)) {

        a = prompt('Это неверное число, повторите попытку ', '');
    }
    b = prompt('Введите второе число для вычислений', '');

    while (isNaN(b)) {
        b = prompt('Это неверное число, повторите попытку ', '');
    }
    operation = prompt('Выберте операцию, где 1-Сложение, 2- Вычитание, 3- Умножение, 4- Деление', '');
    while (!(operation == 1 | operation == 2 | operation == 3 | operation == 4))
        operation = prompt('Неверно! Повторите выбор операции, где 1-Сложение, 2- Вычитание, 3- Умножение, 4- Деление', '');
    alert("Итог операции: " + mathOperation(a, b, operation))
}

function task6() {
    let money, a, b;
    money = prompt("Какую сумму вы хотите положить в банк?", 0);
    console.log(money);
    if (money == null | isNaN(money))
        alert("Ошибка, введите сумму");
    else {
        money = parseInt(money, 10);
        console.log(typeof(money));
        a = money % 10;
        console.log(a);
        if (money != 0) {
            if (a == 1) {
                b = "ь";
            } else
            if (a == 2 | a == 3 | a == 4) {
                b = "я";
            } else {
                b = "ей";
            }
            alert("Ваша сумма в " + money + " рубл" + b + " успешно зачислена.");
        } else
            alert("Деньги не зачислены");
    }
}