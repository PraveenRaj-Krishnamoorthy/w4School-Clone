function func() {
    let close = document.querySelector('.sidebar');
    close.classList.add('d-none');
}

var course = [];
var total = 0;

function add(lang) {
    let close = document.querySelector('.sidebar');
    close.classList.remove('d-none');
    if (lang === 'html') {
        course.push({ name: 'html', price: 100 })
        total += 100
    } else if (lang === 'css') {
        course.push({ name: 'css', price: 200 })
        total += 200
    } else if (lang === 'js') {
        course.push({ name: 'js', price: 300 })
        total += 300
    } else if (lang === 'react') {
        course.push({ name: 'react', price: 350 })
        total += 350
    } else if (lang === 'node') {
        course.push({ name: 'node', price: 280 })
        total += 280
    }
    display()
}

function remove(lang) {
    let close = document.querySelector('.sidebar');
    close.classList.remove('d-none');
    let indexed = course.findIndex((e) => {
        return e.name === lang
    })
    if (indexed !== -1) {
        total -= course[indexed].price
        course.splice(indexed, 1)
    }
    if (course.length == 0) {
        let close = document.querySelector('.sidebar');
        close.classList.add('d-none');
    }
    display()
}

function display() {
    let view = document.querySelector('.listing')
    view.innerHTML = ''
    const unique = {}
    for (const items of course) {
        const name = items.name
        const price = items.price
        if (!unique[name]) {
            unique[name] = price
        }
    }
    for (const name in unique) {
        const price = unique[name];
        view.innerHTML +=
            `
            ${name} - ${price} <button onclick="remove('${name}')"style='padding:1px'><h1>-</h1> </button> <button onclick="add('${name}')"><h1>+</h1</button> </br>
        `;
    }
    let bill = document.querySelector(".total")
    bill.innerHTML = `<h1>Total: ${total}</h1>`
}