// let ballPrices = [20, 25, 5, 15, 30]

// let totalPrice = ballPrices.reduce((totalPrice) => {
//       return 'golden ' + ball
// })

let ballPrices = [20, 25, 5, 15, 30]

let totalPrice = ballPrices.reduce((total, price) => {
    return total + price
})