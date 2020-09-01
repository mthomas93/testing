const basket = ['Oranges', 'Banana', 'Mango', 'Plum', 1, 2, 4, true, { person: 'Thomas'}]

const fruits = basket.map(item => {
    if (item === 'Oranges' || item === 'Banana' || item === 'Mango' || item === 'Plum') {
        return item
    } else {
        return 'Not a fruit'
    }
})

const basket1 = {
    fruits: ['Oranges', 'Banana', 'Mango', 'Plum']
}

console.log(fruits)