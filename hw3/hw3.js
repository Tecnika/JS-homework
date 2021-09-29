'use strict'

function task1() {
    let b;
    for (let a = 0; a < 10; a++) {
        if (a % 2 == 1)
            b = "не";
        else
            b = "";
        console.log(a + " — " + b + "четное число ");
    }

}

function task2() {

    const post = {
        author: "John",
        postId: 23,
        comments: [{
                userId: 10,
                unerName: "Alex",
                text: "Lorem, ipsum.",
                rating: {
                    likes: 10,
                    dislikes: 2
                }
            },
            {
                userId: 5,
                unerName: "Jane",
                text: "Lorem, ipsum. 2",
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}


function task3() {
    const products = [{
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900
        },
        {
            id: 1,
            price: 1000
        },
    ]
    for (let i = 0; i < products.length; i++) {
        console.log("id: " + products[i].id);
        console.log("price: " + products[i].price);
    }
    products.forEach(element => {
        console.log("CКИДКИ!!!!!!!!!!!!!!!!!!!!")
        console.log("Товар  id: " + element.id);
        console.log("Новая цена : " + element.price * (1 - 0.15));
    })

}

function task4() {

    const products = [{
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        }, {
            id: 8,
            price: 78,
        },
    ];
    console.log("Есть фото");
    let result = products.filter(element => (element.photos !== undefined) && (element.photos.length > 0));
    console.log(result);

    products.sort(function(a, b) {
        if (a.price > b.price)
            return 1;
        else
        if (a.price < b.price)
            return -1;
        else
            return 0;

    });
    console.log("Отсортировано");
    console.log(products)

}

function whynot(a) {
    console.log(a);
    a++;
    return a;
}

function task5() {
    for (let i = 0; i < 10; i = whynot(i)) {}
}

function task6() {
    let a = "x";
    for (let i = 0; i < 20; i++) {
        console.log(a);
        a = a + "x";
    }
}