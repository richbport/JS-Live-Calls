// let ballPrices = [20, 25, 5, 15, 30]

// let totalPrice = ballPrices.reduce((totalPrice) => {
//       return 'golden ' + ball
// })

let ballPrices = [20, 25, 5, 15, 30]

let totalPrice = ballPrices.reduce((total, price) => {
    return total + price
}, 0,)

console.log(totalPrice)

// total = 0, first price = 20 === 20
// total = 20, second price = 25 === 45
// total = 45, third price = 5 === 50
// total = 50, third price = 15 === 65
// total = 65, third price = 30 === 95