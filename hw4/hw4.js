function Product_es5(name, price) {
    this.name = name;
    this.price = price;
}

Product_es5.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75;
}

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
    };
}

function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post_es5.prototype.edit = function(text) {
    this.text = text;
}


function AttachedPost_es5(author, text, date) {
    // this(author, text, date) = new Post_es5(author, text, date);
    Post_es5.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
// AttachedPost_es5.prototype = AttachedPost_es5; // с этим код НЕ работает

AttachedPost_es5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}


class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    };
}
class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

function task1() {
    console.log("1.0");
    let chislo = {},
        a = prompt("Введите число", 123);
    a = Number(a);
    if (a >= 0 & a <= 999 & Number.isInteger(a)) {
        chislo.units = a % 10; //это единицы
        chislo.tens = ((a % 100) - (a % 10)) / 10; //это десятки
        chislo.hundreds = ((a % 1000) - (a % 100)) / 100; //это сотни

    } else {
        console.log("Число лежит вне диапозона [0,999]");
    }
    console.log(chislo);
    console.log("1.1");
    let c = prompt("Продукт: ", "Продукт"),
        b = prompt("Цена: ", 100),
        obj1 = new Product_es5(c, b),
        obj2 = new Product_es6(c, b);
    console.log(obj1);
    obj1.make25PercentDiscount();
    console.log(obj1);
    console.log(obj2);
    obj2.make25PercentDiscount();
    console.log(obj2);
    console.log("1.2");
    let p_a = prompt("Введите fвтора", "Автор"),
        p_b = prompt("Введите текст поста", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, saepe?"),
        p_c = prompt("Введите дату", "00.00.0000"),
        p_d = prompt("Введите отредактированный текст поста", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis quia, sunt iusto commodi incidunt animi eveniet officia possimus. Laborum minus nulla dolorum consectetur suscipit possimus, eos iste iure rem?");
    obj1 = new Post_es5(p_a, p_b, p_c);
    console.log(obj1);
    obj1.edit(p_d);
    console.log(obj1);
    obj2 = new Post_es6(p_a, p_b, p_c);
    console.log(obj2);
    obj1.edit(p_d);
    console.log(obj2);
    obj1 = new AttachedPost_es5(p_a, p_b, p_c);
    console.log(obj1);
    obj1.edit(p_d);
    console.log(obj1);
    obj1.makeTextHighlighted();
    console.log(obj1);
    obj1 = new AttachedPost_es6(p_a, p_b, p_c);
    console.log(obj1);
    obj1.edit(p_d);
    console.log(obj1);
    obj1.makeTextHighlighted();
    console.log(obj1);
}



function task2() {
    document.location.href = "./game_abroad/walking.html";
}

function task3() {
    document.location.href = "./game_millionaire/who_want_to_be_a_millionaire.html";
}